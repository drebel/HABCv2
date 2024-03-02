import React from 'react'
import { db, auth} from '../../config/firestore'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import Questionnaire from '../components/Questionnaire'
import Results from '../components/Results'

export default function HabcContainer(){

    const [formData, setFormData] = React.useState({})


    // state for all the calulated scores saved in the doc
    const [calculatedMetrics, setCalculatedMetrics] = React.useState({
        totalScore: null,
        cognitiveScore: null, 
        functionalScore: null,
        behaviorScore: null,
        caregiverScore: null
    })
    // update caluclated metrics when formData changes
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
        const auth = getAuth()
        const user = auth.currentUser
        
        const currentTime = serverTimestamp()

        const newDocValues = {
            createdBy: user.uid,
            createdAt: currentTime,
            ...formData,
            ...calculatedMetrics,
        }
        await addDoc(collection(db, "HABC-responses"), newDocValues);
        console.log(newDocValues)
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        try{
            // addResult()
            console.log('added doc to firestore')
            toggleQuestionnaire()
        }catch(error){
            console.error(error)
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
                    <Results formData={formData} calculatedMetrics={calculatedMetrics}/>
                    <br />
                    <button onClick={toggleQuestionnaire}>Return to Quetionnaire</button>
                </>
            )}
            
            </section>
        </>
    )
}