import React from 'react'
import {db} from '../../config/firestore'
import {collection, getDocs, where, query} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

import Chart from './Chart'
import RecentScore from './RecentScore'
import ActionItems from './ActionItems'
import LongChart from './LongChart'

import questionToModules from '../assets/questionToModules'
import eduModules from '../assets/eduModules'

export default function Results(props){

    React.useEffect( () => {
        console.log('results component mounting.')
        return () => console.log('results component unmounting.')
    },[])

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

    const newScore = {
        createdAt: new Date(),
        calculatedMetrics: props.calculatedMetrics,
        rawScores: props.formData
    }

    const rawScores = props.formData
    const entriesArray = Object.entries(rawScores)
        .filter(([key,value]) => value > 0)
        .sort((a,b) => b[1] - a[1])
    // console.log(entriesArray)
    const keys = entriesArray.map(element => element[0])
    // console.log(keys)
    const unfilteredModuleIds = []
    for(const q of keys){
        if(questionToModules[q].length !== 0){
            unfilteredModuleIds.push(questionToModules[q])
        }
    }
    // console.log(unfilteredModuleIds)
    const uniqueArray = [...new Set(unfilteredModuleIds.flat())];
    // console.log(uniqueArray)
    // returns unique array of education modules based on the users score
    const modules = uniqueArray.map(e => eduModules[e])

    const xValues = []
    // const docIds = []
    const totalScoreCutoff = 14
    const totalScoreY = []
    const cognitiveScoreY = []
    const functionalScoreY = []
    const behaviorScoreCutoff = 2
    const behaviorScoreY = []
    const caregiverScoreCutoff = 1
    const caregiverScoreY = []

        const date = newScore.createdAt
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`
        xValues.push(formattedDate)

        totalScoreY.push(props.calculatedMetrics.totalScore)
        cognitiveScoreY.push(props.calculatedMetrics.cognitiveScore)
        functionalScoreY.push(props.calculatedMetrics.functionalScore)
        behaviorScoreY.push(props.calculatedMetrics.behaviorScore)
        caregiverScoreY.push(props.calculatedMetrics.caregiverScore)

        // Add a inital datapoint of 0 so you can see a line if theres only one user score saved
    if(xValues.length == 1){
        const date = newScore.createdAt
        date.setDate(date.getDate() - 1)
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`
        xValues.unshift(formattedDate)

        // docIds.unshift(0)
        totalScoreY.unshift(0)
        cognitiveScoreY.unshift(0)
        functionalScoreY.unshift(0)
        behaviorScoreY.unshift(0)
        caregiverScoreY.unshift(0)
    }
        

    return(
        <>
            <LongChart 
                xValues={xValues}
                totalScoreY={totalScoreY}
                cognitiveScoreY={cognitiveScoreY}
                functionalScoreY={functionalScoreY}
                behaviorScoreY={behaviorScoreY}
                caregiverScoreY={caregiverScoreY}
                totalScoreCutoff={totalScoreCutoff}
                behaviorScoreCutoff={behaviorScoreCutoff}
                caregiverScoreCutoff={caregiverScoreCutoff}
                />            
            {/* <section style={{ height: '85vh'}}>testing</section> */}
            <RecentScore calculatedMetrics={props.calculatedMetrics}/>
            <ActionItems 
                recentScore={newScore}
                tips={modules}
            />
            
        </>
    )
}