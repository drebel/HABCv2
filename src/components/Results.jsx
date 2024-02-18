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
            <h2>Total Score: {props.calculatedMetrics.totalScore}</h2>

            {/* <button onClick={getResults}>console log saved docs by user</button> */}
        </>
    )
}