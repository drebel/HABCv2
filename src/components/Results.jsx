import React from 'react'
import {db} from '../../config/firestore'
import {collection, getDocs, where} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

export default function Results(){

    async function getResults(){
        const auth = getAuth()
        const user = auth.currentUser
        // console.log(user)

        const userDocs = []
        const querySnapshot = await getDocs(collection(db, 'test-database'), where('createdBy', '==', `${user.uid}`))
        querySnapshot.forEach( doc => {
            userDocs.push(doc.data())
        })
        console.log(userDocs)


    }

    // React.useEffect(() => {
    //     getResults()
    // },[])

    return(
        <>
            <button onClick={getResults}>console log saved docs by user</button>
        </>
    )
}