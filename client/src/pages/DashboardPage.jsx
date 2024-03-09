import React from 'react'
import axios from 'axios'

import LongChart from '../components/LongChart'

export default function DashboardPage(props){

    const [scoresArray, setScoresArray] = React.useState([])


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

    if(xValues.length == 1){
        const date = new Date (score.createdAt)
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
            {/* <form onSubmit={handleSubmit}>
                <button>get all scores</button>
            </form> */}
        </>
    )
}