// import React from 'react'
// import {db} from '../../config/firestore'
// import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

import questions from '../assets/questions'
import Question from './Question'

import '../list-group.css'

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
            <h2>Over the past two weeks how often did YOUR LOVED ONE have problems with:</h2>
            <form onSubmit={props.handleSubmit}>
                {questionElements.slice(0,-4)}
                <h2>Over the past two weeks how often did YOU have problems with:</h2>
                {questionElements.slice(-4)}
                <button>Submit</button>
            </form>
        </>
    ) 

}