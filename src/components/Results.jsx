import React from 'react'
import {db} from '../../config/firestore'
import {collection, getDocs, where, query} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

export default function Results(props){

    // async function getResults(){
    //     const auth = getAuth()
    //     const user = auth.currentUser
    //     console.log(user.uid)

    //     const userDocs = []
    //     const q = query(collection(db, 'HABC-responses'), where('createdBy', '==', `${user.uid}`))
    //     const querySnapshot = await getDocs(q)
    //     querySnapshot.forEach( doc => {
    //         userDocs.push(doc.data())
    //     })
    //     console.log(userDocs)


    // }

    // React.useEffect(() => {
    //     getResults()
    // },[])

    return(
        <>
            <table>
                <caption>Your Results</caption>
                <thead>
                    <tr>
                        <th scope='col'></th>
                        <th scope='col'>Your Score</th>
                        <th scope='col'>Target</th>
                    </tr>
                    <tr>
                        <th scope='row'>Cognitive Subscore</th>
                        <td>{props.calculatedMetrics.cognitiveScore}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope='row'>Functional Subscore</th>
                        <td>{props.calculatedMetrics.functionalScore}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope='row'>Behavior and Mood Subscore</th>
                        <td>{props.calculatedMetrics.behaviorScore}</td>
                        <td>Less than 2 or 50% reduction within 12 months</td>
                    </tr>
                    <tr>
                        <th scope='row'>Caregiver Stress Subscore</th>
                        <td>{props.calculatedMetrics.caregiverScore}</td>
                        <td>Less than 1 or 50% reduction within 12 months</td>
                    </tr>
                    <tr>
                        <th scope='row'>Total</th>
                        <td>{props.calculatedMetrics.totalScore}</td>
                        <td>Less than 14 or 50% reduction within 12 months</td>
                    </tr>
                </thead>
            </table>

            {/* <h2>Total Score: {props.calculatedMetrics.totalScore}</h2>
            <p>Ideal total score: less than 14 or 50% reduction from baseline score by 12 months</p>
            <h3>Cognitive Subscore: {props.calculatedMetrics.cognitiveScore}</h3>
            <h3>Functional Subscore: {props.calculatedMetrics.functionalScore}</h3>
            <h3>Behavior and Mood Subscore: {props.calculatedMetrics.behaviorScore}</h3>
            <p>Ideal Behavior and Mood score: less than 2 or 50% reduction from baseline score by 12 months</p>
            <h3>Caregiver Stress Subscore: {props.calculatedMetrics.caregiverScore}</h3>
            <p>Ideal Caregiver Stress score: 
            less than 1 or 50% reduction from baseline score by 12 months</p> */}

            {/* <button onClick={getResults}>console log saved docs by user</button> */}
        </>
    )
}