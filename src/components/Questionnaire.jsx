import React from 'react'
import {db} from '../../config/firestore'
import { collection, addDoc} from 'firebase/firestore'

export default function Questionnaire(){

    const [formData, setFormData] = React.useState({
        q1:null,
        q2:null,
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:Number(value)
            }
        })
    }

    async function addResult(formData){
        // Add a new document in collection "cities"
        await addDoc(collection(db, "test-database"), formData);
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        try{
            addResult(formData)
            console.log('added doc to firestore')
        }catch(error){
            console.error(error)
        }
    } 

    return(
        <>
            <h2>Fill out and submit this form please</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Question 1</legend>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={0}
                            checked={formData.q1 === 0}
                            onChange={handleChange}
                         />
                        None
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={1}
                            checked={formData.q1 === 1}
                            onChange={handleChange}
                         />
                        Some
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={2}
                            checked={formData.q1 === 2}
                            onChange={handleChange}
                         />
                        Often
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={3}
                            checked={formData.q1 === 3}
                            onChange={handleChange}
                         />
                        Always
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Question 2</legend>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={0}
                            checked={formData.q2 === 0}
                            onChange={handleChange}
                         />
                        None
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={1}
                            checked={formData.q2 === 1}
                            onChange={handleChange}
                         />
                        Some
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={2}
                            checked={formData.q2 === 2}
                            onChange={handleChange}
                         />
                        Often
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={3}
                            checked={formData.q2 === 3}
                            onChange={handleChange}
                         />
                        Always
                    </label>
                </fieldset>
                <button>Submit</button>
            </form>
        </>
    ) 

}