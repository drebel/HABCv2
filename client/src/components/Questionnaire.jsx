// import React from 'react'
// import {db} from '../../config/firestore'
// import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

import questions from '../assets/questions'
import Question from './Question'

export default function Questionnaire(props){   

    // const questionElements = questions.map((q, qIndex) => (
    //     // eslint-disable-next-line react/jsx-key
    //     <Question 
    //         questionKey={qIndex}
    //         name={`q${qIndex+1}`}
    //         question={q.question}
    //         formData={props.formData}
    //         handleChange={props.handleChange}
    //     />
    // ))
    const cognitiveElements = questions.filter( q => q.subscale === 'Cognitive').map(q => (
        <Question 
            questionKey={q.id}
            name={`q${q.id}`}
            question={q.question}
            formData={props.formData}
            handleChange={props.handleChange}
        />
    ))

    const functionalElements = questions.filter( q => q.subscale === 'Functional').map(q => (
        <Question 
            questionKey={q.id}
            name={`q${q.id}`}
            question={q.question}
            formData={props.formData}
            handleChange={props.handleChange}
        />
    ))

    const behaviorElements = questions.filter( q => q.subscale === 'Behavioral/Mood').map(q => (
        <Question 
            questionKey={q.id}
            name={`q${q.id}`}
            question={q.question}
            formData={props.formData}
            handleChange={props.handleChange}
        />
    ))

    const caregiverElements = questions.filter( q => q.subscale === 'Caregiver Stress').map(q => (
        <Question 
            questionKey={q.id}
            name={`q${q.id}`}
            question={q.question}
            formData={props.formData}
            handleChange={props.handleChange}
        />
    ))

    return(
        <>
            <h2 className='text-center display-5 fw-bold'>Healthy Aging Brain Care Monitor</h2>
            <div className='text-center'>Estimated time: 6 minutes</div>
            <p className='text-center fw-bold'>Please note this tool is intended as a self-monitoring tool, not as a replacement for a professional clinical evaluation</p>
            <div className='py-2 bg-white my-3'>
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
                                    <ol>
                                        <li className='py-2'>Please mark each item based on your first reaction.
                                            <ul>
                                                <li>Your gut instinct is more important than having actual evidence of a problem with any symptom.</li>
                                            </ul>
                                        </li>
                                        <li className='py-2'>There are no formal definitions for the symptoms.
                                            <ul>
                                                <li>In general, whatever the term means to you is a reasonable and acceptable definition.</li>
                                            </ul>    
                                        </li> 
                                        <li className='py-2'>*A "problem" occurs only when your loved one has difficulty with the symptom <strong>AND either you or your loved one are distressed by that</strong>. For example:
                                            
                                            <ul>
                                                <li className='py-2'>Suppose your loved one is unable to do household chores, but you have hired someone to do the housework AND both you and your loved one are comfortable with that arrangement. In this case, your loved one's inability to do household chores <strong>would not be considered a problem.</strong></li>
                                                <li className='py-2'>However, if you were able to hire a housekeeper but your loved one did not like the person you hired and became agitated whenever the housekeeper was there, then your loved one's inability to do household chores <strong>would be considered a problem</strong> because it is causing one of you distress.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2 className=''>Over the past <strong>two weeks</strong> how often did <strong>your loved one</strong> have problems* with:</h2> */}


            <form onSubmit={props.handleSubmit}>
                <h2 className=''>Over the past <strong>two weeks</strong> how often did <strong>your loved one</strong> have problems* with:</h2>
                <div className='rounded p-3 bg-danger-subtle mb-3'>
                    {cognitiveElements}
                </div>
                <div className='rounded p-3 bg-warning-subtle mb-3'>
                    {functionalElements}
                </div>
                <div className='rounded p-3 bg-success-subtle mb-3'>
                    {behaviorElements}
                </div>
                <h2 className='mt-3'>Over the past <strong>two weeks</strong> how often did <strong>you</strong> have problems* with:</h2>
                <div className='rounded p-3 bg-info-subtle mb-3'>
                    {caregiverElements}
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn btn-outline-secondary btn-lg px-3 mx-3' onClick={props.handleClearForm}>Reset</button>
                    <button className='btn btn-primary btn-lg px-3 mx-3'>Submit</button>
                </div>
                



                {/* <h2 className='mt-3'>Over the past <strong>two weeks</strong> how often did <strong>you</strong> have problems with:</h2>
                {questionElements.slice(0,-4)}
                <h2 className='mt-3'>Over the past <strong>two weeks</strong> how often did <strong>you</strong> have problems with:</h2>
                {questionElements.slice(-4)}
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn btn-outline-secondary btn-lg px-3 mx-3' onClick={props.handleClearForm}>Reset</button>
                    <button className='btn btn-primary btn-lg px-3 mx-3'>Submit</button>
                </div> */}

            </form>
        </>
    ) 

}