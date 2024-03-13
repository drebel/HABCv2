import React from 'react'
import axios from 'axios'

import LongChart from '../components/LongChart'

import eduModules from '../assets/eduModules'
import questionToModules from '../assets/questionToModules'

export default function DashboardPage(props){

    const [scoresArray, setScoresArray] = React.useState([])
    const [recentScore, setRecentScore] = React.useState({})


    React.useEffect(() => {
        
        async function getScores(){
            try{
                const res = await axios.get(`http://localhost:5000/score?uid=${props.userAuth.uid}`)
                const fetchedScoresArray = res.data
                setScoresArray(fetchedScoresArray)
            }catch(error){
                console.error(error)
            }
        }

        if(props.userAuth){
            getScores()
        }

    }, [props.userAuth])

    React.useEffect(() => {
        setRecentScore(scoresArray[0])
    },[scoresArray])



    const xValues = []
    const docIds = []
    const totalScoreCutoff = 14
    const totalScoreY = []
    const cognitiveScoreY = []
    const functionalScoreY = []
    const behaviorScoreCutoff = 2
    const behaviorScoreY = []
    const caregiverScoreCutoff = 1
    const caregiverScoreY = []

    for(const score of scoresArray){
        const date = new Date (score.createdAt)
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`
        xValues.push(formattedDate)

        docIds.push(score._id)
        totalScoreY.push(score.calculatedMetrics.totalScore)
        cognitiveScoreY.push(score.calculatedMetrics.cognitiveScore)
        functionalScoreY.push(score.calculatedMetrics.functionalScore)
        behaviorScoreY.push(score.calculatedMetrics.behaviorScore)
        caregiverScoreY.push(score.calculatedMetrics.caregiverScore)
    }

    //Add a inital datapoint of 0 so you can see a line if theres only one user score saved
    // if(xValues.length == 1){
    //     const date = new Date (scoresArray[0].createdAt)
    //     date.setDate(date.getDate() - 1)
    //     const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`
    //     xValues.unshift(formattedDate)

    //     docIds.unshift(0)
    //     totalScoreY.unshift(0)
    //     cognitiveScoreY.unshift(0)
    //     functionalScoreY.unshift(0)
    //     behaviorScoreY.unshift(0)
    //     caregiverScoreY.unshift(0)
    // }

    function showScores(e){
        e.preventDefault()
        console.log(recentScore)
        const rawScoresObj = recentScore.rawScores
        const entriesArray = Object.entries(rawScoresObj)
            .filter(([key,value]) => value > 0)
            .sort((a,b) => b[1] - a[1])
        console.log(entriesArray)
        const keys = entriesArray.map(element => element[0])
        console.log(keys)
        const unfilteredModuleIds = []
        for(const q of keys){
            if(questionToModules[q].length !== 0){
                unfilteredModuleIds.push(questionToModules[q])
            }
        }
        console.log(unfilteredModuleIds)
        const uniqueArray = [...new Set(unfilteredModuleIds.flat())];
        console.log(uniqueArray)
        // returns unique array of education modules based on the users score

    }

    return (
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
            <button onClick={showScores}>Show Scores</button>
            <div>

            </div>
        </>
    )
}