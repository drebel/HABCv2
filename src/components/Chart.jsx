import React from "react"
import Plot from 'react-plotly.js'

export default function Chart(props){

    function getCurrentDate() {
        const dateObj = new Date()
        const month = dateObj.getMonth() + 1
        const day = dateObj.getDate()
        const year = dateObj.getFullYear()
        return `${month}/${day}/${year}`
    }

    function getYesterdayDate() {
        const dateObj = new Date()
        dateObj.setDate(dateObj.getDate() - 1)
        const month = dateObj.getMonth() + 1
        const day = dateObj.getDate()
        const year = dateObj.getFullYear()
        return `${month}/${day}/${year}`
    }
    
    const currentDate = getCurrentDate()
    const yesterdayDate = getYesterdayDate()

    const xValues = [yesterdayDate, currentDate]

    const totalCutoffScore = 14
    const totalScoreY = [0, props.calculatedMetrics.totalScore]
    const cognitiveScoreY = [0, props.calculatedMetrics.cognitiveScore]
    const functionalScoreY = [0, props.calculatedMetrics.functionalScore]
    const behaviorScoreY = [0, props.calculatedMetrics.behaviorScore]
    const caregiverScoreY = [0, props.calculatedMetrics.caregiverScore]


    const data = [
        {
            x: xValues,
            y: Array(xValues.length).fill(totalCutoffScore),
            type: 'scatter',
            mode: 'lines',
            line: { color: 'black', dash:'dashdot'},
            name: 'Total Score Cut off', // Optional: add a name for the trace
        },
        {
            x: xValues,
            y: totalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'black' },
            name: 'Total Score', // Optional: add a name for the trace
        },
        {
            x: xValues,
            y: cognitiveScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
            name: 'Cognitive Subscore', // Optional: add a name for the trace
        },
        {
            x: xValues,
            y: functionalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'orange' },
            name: 'Functional Subscore', // Optional: add a name for the trace
        },
        {
            x: xValues,
            y: behaviorScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'green' },
            name: 'Behavior Subscore', // Optional: add a name for the trace
        },
        {
            x: xValues,
            y: caregiverScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
            name: 'Caregiver Stress Subscore', // Optional: add a name for the trace
        },

        // Add more trace objects as needed
    ]

    const layout = {
        dragmode:'pan'
    }

    const config = {
        responsive:true,
        scrollZoom:true,
    }


    return (
        <Plot 
            data={data}
            layout={layout}
            config={config}
        />
    )
}