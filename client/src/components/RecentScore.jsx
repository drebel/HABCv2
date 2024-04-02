import React from "react"

export default function RecentScore(props){

    // React.useEffect( () => {
    //     console.log('recentscore component mounting.')
    //     return () => console.log('recentscore component unmounting.')
    // },[])

    return(
        <div className='container px-4 my-4'>
        <div className='row'>
            <div className='col-12 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Total Score</div>
                <div className='display-5'>{props.calculatedMetrics.totalScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Cognitive Subscore</div>
                <div className='display-5'>{props.calculatedMetrics.cognitiveScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Functional Subscore</div>
                <div className='display-5'>{props.calculatedMetrics.functionalScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div className="">Behavior & Mood Subscore</div>
                <div className='display-5'>{props.calculatedMetrics.behaviorScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Caregiver Stress Subscore</div>
                <div className='display-5'>{props.calculatedMetrics.caregiverScore}</div>
            </div>
        </div>
    </div>
    )
}