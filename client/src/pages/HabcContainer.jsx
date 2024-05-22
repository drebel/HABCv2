import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import axios from 'axios'

import Questionnaire from '../components/Questionnaire'
import Results from '../components/Results'
import Login from '../components/Login'
import Signup from '../components/Signup'

import updateScore from '../../utils/updateScore'

export default function HabcContainer(props){
    const prodURL = import.meta.env.VITE_REACT_APP_URL


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
    const resultsRef = React.useRef(null)

    function toggleQuestionnaire(){
        setShowQuestionnaire(prevShowQuestionnaire => !prevShowQuestionnaire)
    }

    React.useEffect(() => {
        if(!showQuestionnaire){
            if(resultsRef.current){
                // console.log('about to scroll')
                resultsRef.current.parentElement.scrollIntoView({ behavior: 'smooth' });
            }
        }else{
            window.scrollTo(0,0)
        }
    }, [showQuestionnaire])

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

            const response = await axios.post(`/score`, newDocValues)
            return response.data
        }catch(error){
            console.error(error)
        }
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(user){
            try{
                const response = await axios.get(`/score?uid=${user.uid}`)
                
                if(response.data.length > 0){
                    const recentScore = response.data[response.data.length - 1]

                    const recentDate = new Date (recentScore.createdAt)
                    const formattedRecentDate = `${recentDate.getMonth() + 1}/${recentDate.getDate()}/${recentDate.getFullYear() % 100}`
                    
                    const today = new Date()
                    const formattedToday = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear() % 100}`
                    
                    if (formattedRecentDate === formattedToday) {
                        const confirmed = window.confirm(`You have already submitted a response today (${formattedToday}). Do you want to replace the previous response with this one?`);
                        if (confirmed) {
                            // console.log(recentScore._id)
                            updateScore(recentScore._id, user, formData, calculatedMetrics)
                        }
                    }
                }else{
                    await addResult()
                }
                navigate('/dashboard')

            }catch(error){
                console.error(error)
            }
        }else{
            toggleQuestionnaire()
            localStorage.setItem('guestScore', JSON.stringify({rawScores:formData, calculatedMetrics: calculatedMetrics}))
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
                </>
            ) : (
                <>
                    <div ref={resultsRef}>
                        <Results 
                        formData={formData} 
                        calculatedMetrics={calculatedMetrics}
                        user={user}
                        toggleQuestionnaire={toggleQuestionnaire}
                        toggleShowLogin={props.toggleShowLogin}
                        toggleShowSignup={props.toggleShowSignup}

                        />
                    </div>
                    {/* <div className='text-center'>
                        <br />
                        <button className='btn btn-outline-primary' onClick={toggleQuestionnaire}>Return to Quetionnaire</button>
                        <div className='m-4'>
                            <h4>Your data isnt saved!</h4>
                            <h5>Log in or sign up to save your score</h5>
                            <button type="button" className="btn btn-outline-primary me-2" onClick={props.toggleShowLogin}>Login</button>
                            <button type="button" className="btn btn-primary" onClick={props.toggleShowSignup}>Sign-up</button>
                        </div>
                    </div> */}
                </>
            )}
            
            </section>
        </>
    )
}