import React from "react"
import Plot from 'react-plotly.js'

export default function LongChart(props){

    // React.useEffect( () => {
    //     console.log('longchart component mounting.')
    //     return () => console.log('longchart component unmounting.')
    // },[])

    const data = [
        {
            x: props.xValues,
            y: Array(props.xValues.length).fill(props.totalScoreCutoff),
            type: 'scatter',
            mode: 'lines',
            line: { color: 'black', dash:'dashdot'},
            name: 'Total Score Cut off', 
            // legendgroup: 'total',
        },
        {
            x: props.xValues,
            y: props.totalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'black' },
            name: 'Total Score',
            // legendgroup: 'total', 
            line:{ shape: 'spline', smoothing: 1}
        },
        {
            x: props.xValues,
            y: props.cognitiveScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#dc3545' },
            name: 'Cognitive Subscore', 
            line:{ shape: 'spline', smoothing: 1}

        },
        {
            x: props.xValues,
            y: props.functionalScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#ffc107' },
            name: 'Functional Subscore', 
            line:{ shape: 'spline', smoothing: 1}

        },
        {
            x: props.xValues,
            y: props.behaviorScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#198754' },
            name: 'Behavior Subscore', 
            line:{ shape: 'spline', smoothing: 1}

        },
        {
            x: props.xValues,
            y: props.caregiverScoreY,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#0dcaf0' },
            name: 'Caregiver Stress Subscore',
            line:{ shape: 'spline', smoothing: 1}

        },
        // {
        //     x: props.xValues,
        //     y: Array(props.xValues.length).fill(props.behaviorScoreCutoff),
        //     type: 'scatter',
        //     mode: 'lines',
        //     line: { color: 'green', dash:'dashdot'},
        //     name: 'Behavior Score Cut off', 
        //     // legendgroup: 'total',
        // },
        // {
        //     x: props.xValues,
        //     y: Array(props.xValues.length).fill(props.caregiverScoreCutoff),
        //     type: 'scatter',
        //     mode: 'lines',
        //     line: { color: 'blue', dash:'dashdot'},
        //     name: 'Caregiver Score Cut off', 
        //     // legendgroup: 'total',
        // },
    ]

    const layout = {
        dragmode:'pan',
        autosize: true,
        aspectratio: { x: 1, y: 2 },
        legend: {
            "orientation": "h",
            bordercolor: '#212529',
            borderwidth:1,
            font:{
                size: 14,
                color: '#212529'
            },
            tracegroupgap: 1,
        },
        yaxis: {fixedrange:true},
        //     range: [0, 93] }, 
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
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