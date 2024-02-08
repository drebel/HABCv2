import React from 'react'
import {db} from '../../config/firestore'
import {collection, getDocs} from 'firebase/firestore'

export default function Results(){

    async function getResults(){
        const querySnapshot = await getDocs(collection(db, 'test-database'))
        querySnapshot.forEach(doc => {
            console.log(doc.id, ' => ', doc.data())
        })
    }

    React.useEffect(() => {
        getResults()
    },[])

    return(
        <>
            <h2>See if we can see documents in console</h2>
        </>
    )
}