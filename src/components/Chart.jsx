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
            name: 'Total Score Cut off', 
            // legendgroup: 'total',
        },
        {
            x: xValues,
            y: totalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'black' },
            name: 'Total Score',
            // legendgroup: 'total', 
        },
        {
            x: xValues,
            y: cognitiveScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
            name: 'Cognitive Subscore', 
        },
        {
            x: xValues,
            y: functionalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'orange' },
            name: 'Functional Subscore', 
        },
        {
            x: xValues,
            y: behaviorScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'green' },
            name: 'Behavior Subscore', 
        },
        {
            x: xValues,
            y: caregiverScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
            name: 'Caregiver Stress Subscore',
        },
    ]

    const layout = {
        dragmode:'pan',
        autosize: true,
        aspectratio: { x: 1, y: 2 },
        legend: {"orientation": "h"},
        // yaxis: {fixedrange:true,
        //     range: [0, 93] }, 
        paper_bgcolor: '#edfbf7',
        plot_bgcolor: '#ffffff',
        margin: {
            l: 20,
            r: 20,
            b: 100,
            t: 40,
            pad: 0
          },
    }

    const config = {
        responsive:true,
        scrollZoom:true,
    }


    return (
        <div style={{ height: '85vh' }}>
            <Plot 
                data={data}
                layout={layout}
                config={config}
                useResizeHandler={true}
                style={{width: '100%', height:'100%'}}
                />
        </div>
    )
}