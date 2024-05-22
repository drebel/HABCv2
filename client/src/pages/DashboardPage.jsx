import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import LongChart from '../components/LongChart'
import RecentScore from '../components/RecentScore'
import ActionItems from '../components/ActionItems'

import eduModules from '../assets/eduModules'
import questionToModules from '../assets/questionToModules'

export default function DashboardPage(props){
    const prodURL = import.meta.env.VITE_REACT_APP_URL


    const [scoresArray, setScoresArray] = React.useState([])
    const [recentScore, setRecentScore] = React.useState({
        calculatedMetrics:{
            totalScore:'',
            cognitiveScore:'',
            functionalScore:'',
            behaviorScore:'',
            caregiverScore:'',
        },
        rawScores:{}
    })
    const [tips, setTips] = React.useState([])


    React.useEffect(() => {
        
        async function getScores(){
            try{
                const res = await axios.get(`/score?uid=${props.userAuth.uid}`)
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
        if (scoresArray.length > 0) {
            setRecentScore(scoresArray[scoresArray.length-1])
        }
    },[scoresArray])

    React.useEffect(() => {
        if (!recentScore || !recentScore.rawScores) {
            // console.log("Recent score data is not available yet.")
            // console.log(recentScore,recentScore.rawScores)
            return
        }

        const rawScoresObj = recentScore.rawScores
        const entriesArray = Object.entries(rawScoresObj)
            .filter(([key,value]) => value > 0)
            .sort((a,b) => b[1] - a[1])
        // console.log(entriesArray)
        const keys = entriesArray.map(element => element[0])
        // console.log(keys)
        const unfilteredModuleIds = []
        for(const q of keys){
            // console.log(`value of q: ${q}`)
            if(questionToModules[q].length !== 0){
                unfilteredModuleIds.push(questionToModules[q])
            }
        }
        // console.log(unfilteredModuleIds)
        const uniqueArray = [...new Set(unfilteredModuleIds.flat())];
        // console.log(uniqueArray)
        // returns unique array of education modules based on the users score
        const modules = uniqueArray.map(e => eduModules[e])
        setTips(modules)
    },[recentScore, recentScore.rawScores])



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
    if(xValues.length == 1){
        const date = new Date (scoresArray[0].createdAt)
        date.setDate(date.getDate() - 1)
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`
        xValues.unshift(formattedDate)

        docIds.unshift(0)
        totalScoreY.unshift(0)
        cognitiveScoreY.unshift(0)
        functionalScoreY.unshift(0)
        behaviorScoreY.unshift(0)
        caregiverScoreY.unshift(0)
    }

    function test(e){
        e.preventDefault(e)
        console.log(recentScore)
    }

    function showScores(e){
        e.preventDefault()
        console.log(recentScore)

        if (!recentScore || !recentScore.rawScores) {
            console.log("Recent score data is not available yet.")
            return
        }

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
        const titles = uniqueArray.map(e => {
            return eduModules[e].title
        })
        console.log(titles)
    }

    return (
        <>
            <section className='container pb-5'>
                {/* <button onClick={test}>test</button> */}
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
                <RecentScore calculatedMetrics={recentScore.calculatedMetrics}/>
                {Object.keys(recentScore.rawScores).length == 0 
                ?
                <div className="container px-4 mb-4 d-flex flex-column align-items-center justify-content-center flex-wrap mb-5">
                    <h2 className='text-center'>Please fill out the HABC first in order to see your results!</h2>
                    
                    <Link to="../habc" className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</Link>
                </div>
                :
                <ActionItems
                    recentScore={recentScore}
                    tips={tips}
                    />
                }   

            </section>
        </>
    )
}