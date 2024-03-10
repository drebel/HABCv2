import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import axios from 'axios'

import Questionnaire from '../components/Questionnaire'
import Results from '../components/Results'

export default function HabcContainer(){

    const auth = getAuth()
    const user = auth.currentUser
    let navigate = useNavigate()

    const [formData, setFormData] = React.useState({})

    const [calculatedMetrics, setCalculatedMetrics] = React.useState({
        totalScore: null,
        cognitiveScore: null, 
        functionalScore: null,
        behaviorScore: null,
        caregiverScore: null
    })

    React.useEffect(() => {
        calculateMetrics()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])


    const [showQuestionnaire, setShowQuestionnaire] = React.useState(true)

    function toggleQuestionnaire(){
        setShowQuestionnaire(prevShowQuestionnaire => !prevShowQuestionnaire)
    }

    function handleClearForm(e){
        e.preventDefault()
        setFormData({})
    }


    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:Number(value)
            }
        })
        console.log(formData)
    }


    function calculateMetrics(){
        let sum = 0
        let cognitiveSum = 0
        let functionalSum = 0
        let behaviorSum = 0
        let caregiverSum = 0

        for( let key in formData){
            sum += formData[key]

            const questionNumber = parseInt(key.slice(1))

            if(questionNumber <= 6){
                cognitiveSum += formData[key]
            }else if(questionNumber <= 17){
                functionalSum += formData[key]
            }else if(questionNumber <= 27){
                behaviorSum += formData[key]
            }else{
                caregiverSum += formData[key]
            }
        }


        setCalculatedMetrics( prevCalculatedMetrics => {
            return {
                ...prevCalculatedMetrics,
                totalScore: sum,
                cognitiveScore: cognitiveSum, 
                functionalScore: functionalSum,
                behaviorScore: behaviorSum,
                caregiverScore: caregiverSum
            }
        })
    }


    async function addResult(){
        try{
            const newDocValues = {
                createdBy: user.uid,
                rawScores: formData,
                calculatedMetrics: calculatedMetrics,
            }

            await axios.post('http://localhost:5000/score', newDocValues)
        }catch(error){
            console.error(error)
        }


    }


    async function handleSubmit(e){
        e.preventDefault()
        if(user){
            try{
                await addResult()
                navigate('/dashboard')
            }catch(error){
                console.error(error)
            }
        }else{
            try{
                toggleQuestionnaire()
            }catch(error){
                console.error(error)
            }
        }
    } 



    return(
        <>
            <section className='container pb-5'>

            {showQuestionnaire ? (
                <>
                    <Questionnaire 
                        formData={formData} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        handleClearForm={handleClearForm} 
                        />
                    <br />

                </>
            ) : (
                <>
                    <div className='text-center'>
                        <Results formData={formData} calculatedMetrics={calculatedMetrics}/>
                        <br />
                        <button className='btn btn-outline-primary' onClick={toggleQuestionnaire}>Return to Quetionnaire</button>
                    </div>
                </>
            )}
            
            </section>
        </>
    )
}