import React from 'react'
import axios from 'axios'
import { getAuth } from 'firebase/auth'

// import Hero from '../components/Hero'
// import Feature1 from '../components/Feature1'
// import Feature2 from '../components/Feature2'
// import IconGrid from '../components/IconGrid'
// import FeatureWithIcons from '../components/FeatureWithIcons'

export default function Testing(){

    async function getScores(){
        const auth = getAuth()
        const user = auth.currentUser
        console.log(user.uid)

        const res = await axios.get(`http://localhost:5000/score?uid=${user.uid}`)
        const scoresArray = res.data
        console.log(scoresArray)
    }

    function handleSubmit(e){
        e.preventDefault()
        getScores()
    }

    return (
        <>
                <form onSubmit={handleSubmit}>
                    <button>get all scores</button>
                </form>
        </>
    )
}