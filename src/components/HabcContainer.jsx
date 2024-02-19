import React from 'react'
import { db, auth} from '../../config/firestore'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import Questionnaire from './Questionnaire'
import Results from './Results'

export default function HabcContainer(){

    const [formData, setFormData] = React.useState({})

    const [calculatedMetrics, setCalculatedMetrics] = React.useState({
        totalScore: null
    })

    React.useEffect(() => {
        calculateMetrics()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])

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
        for( let key in formData){
            sum += formData[key]
        }
        setCalculatedMetrics( prevCalculatedMetrics => {
            return {
                ...prevCalculatedMetrics,
                totalScore: sum
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
            addResult()
            console.log('added doc to firestore')
        }catch(error){
            console.error(error)
        }
    } 

    return(
        <>
            <Questionnaire 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            <Results formData={formData} calculatedMetrics={calculatedMetrics}/>
        </>
    )
}