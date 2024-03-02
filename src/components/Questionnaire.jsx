// import React from 'react'
// import {db} from '../../config/firestore'
// import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

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
            <h2 className='text-center display-5 fw-bold'>Healthy Aging Brain Care Monitor</h2>
            <div className='text-center'>Estimated time: 6 minutes</div>
            <div className='py-2 bg-white'>
                <div className='mb-2'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h2 className=''>Instructions:</h2>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Please mark each item based on your first reaction</li>
                                        <li>Evidence of actual change is NOT as important as your gut instinct</li>
                                        <li>There are no formal definitions for the symptoms you are being asked to rate, although, in some cases, examples of the symptom are included</li>
                                        <li>In general, whatever the term means to you is a reasonable and acceptable definition</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h2 className=''>Over the past <strong>two weeks</strong> how often did <strong>your loved one</strong> have problems with:</h2>


            <form onSubmit={props.handleSubmit}>
                {questionElements.slice(0,-4)}
                <hr />
                <h2 className='mt-3'>Over the past <strong>two weeks</strong> how often did <strong>you</strong> have problems with:</h2>
                {questionElements.slice(-4)}
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn btn-success btn-lg px-3 mx-3'>Submit</button>
                    <button className='btn btn-outline-warning btn-lg px-3 mx-3' onClick={props.handleClearForm}>Clear Form</button>
                </div>

            </form>
        </>
    ) 

}