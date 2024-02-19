import React from 'react'
import {db} from '../../config/firestore'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import questions from '../assets/questions'
import Question from './Question'

export default function Questionnaire(props){   

    const questionElements = questions.map((q, qIndex) => (
        // eslint-disable-next-line react/jsx-key
        <Question 
            questionKey={qIndex}
            name={`q${qIndex+1}`}
            question={q.question}
            formData={props.formData}
            handleChange={props.handleChange}
        />
    ))

    return(
        <>
            <h2>Please mark each item based on your first reaction <br/>Evidence of actual change is NOT as important as your gut instinct</h2>
            <h3>There are no formal definitions for the symptoms you are being asked to rate, although, in some cases, examples of the symptom are included. <br />In general, whatever the term means to you is a reasonable and acceptable definition.</h3>
            <h2>Over the past two weeks how often did your loved one have problems with:</h2>
            <form onSubmit={props.handleSubmit}>
                {questionElements}

                {/* <fieldset>
                    <legend>Judgment or decision-making</legend>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={0}
                            checked={props.formData.q1 === 0}
                            onChange={props.handleChange}
                         />
                        Not At All (0-1 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={1}
                            checked={props.formData.q1 === 1}
                            onChange={props.handleChange}
                         />
                        Serveral Days (2-6 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={2}
                            checked={props.formData.q1 === 2}
                            onChange={props.handleChange}
                         />
                        More than half the days (7-11 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name='q1'
                            value={3}
                            checked={props.formData.q1 === 3}
                            onChange={props.handleChange}
                         />
                        Almost Daily (12-14 days)
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
                </fieldset> */}
                <button>Submit</button>
            </form>
        </>
    ) 

}