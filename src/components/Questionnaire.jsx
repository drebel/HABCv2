import React from 'react'
import {db} from '../../config/firestore'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default function Questionnaire(props){   

    return(
        <>
            <h2>Fill out and submit this form please</h2>
            <form onSubmit={props.handleSubmit}>
                <fieldset>
                    <legend>Question 1</legend>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={0}
                            checked={props.formData.q1 === 0}
                            onChange={props.handleChange}
                         />
                        None
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={1}
                            checked={props.formData.q1 === 1}
                            onChange={props.handleChange}
                         />
                        Some
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={2}
                            checked={props.formData.q1 === 2}
                            onChange={props.handleChange}
                         />
                        Often
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={3}
                            checked={props.formData.q1 === 3}
                            onChange={props.handleChange}
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
                            checked={props.formData.q2 === 0}
                            onChange={props.handleChange}
                         />
                        None
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={1}
                            checked={props.formData.q2 === 1}
                            onChange={props.handleChange}
                         />
                        Some
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={2}
                            checked={props.formData.q2 === 2}
                            onChange={props.handleChange}
                         />
                        Often
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q2'
                            value={3}
                            checked={props.formData.q2 === 3}
                            onChange={props.handleChange}
                         />
                        Always
                    </label>
                </fieldset>
                <button>Submit</button>
            </form>
        </>
    ) 

}