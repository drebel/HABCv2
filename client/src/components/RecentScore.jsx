import React from "react"

export default function RecentScore(props){

    // React.useEffect( () => {
    //     console.log('recentscore component mounting.')
    //     return () => console.log('recentscore component unmounting.')
    // },[])

    return(
        <div className='container my-4'>
            <div className='row mx-0'>
                <div className='col-12 col-lg p-0'>
                <div className=' d-flex flex-column justify-content-center align-items-center mb-4 border border-dark border-2 rounded p-3 mx-md-2'>
                    <div className="fw-semibold  text-body-emphasis">Total Score</div>
                    <div className='display-5'>{props.calculatedMetrics.totalScore}</div>
                </div>
                </div>
                <div className='col-12 col-lg col-md-6 p-0'>
                <div className=' d-flex flex-column justify-content-center align-items-center mb-4 p-3 bg-danger-subtle border-2 border border-danger rounded mx-md-2'>
                    <div className="fw-semibold  text-body-emphasis">Cognitive</div>
                    <div className='display-5'>{props.calculatedMetrics.cognitiveScore}</div>
                </div>
                </div>
                <div className='col-12 col-lg col-md-6 p-0'>
                <div className=' d-flex flex-column justify-content-center align-items-center mb-4 p-3 bg-warning-subtle border-2 border border-warning rounded mx-md-2'>
                    <div className="fw-semibold  text-body-emphasis">Functional</div>
                    <div className='display-5'>{props.calculatedMetrics.functionalScore}</div>
                </div>
                </div>
                <div className='col-12 col-lg col-md-6 p-0'>
                <div className=' d-flex flex-column justify-content-center align-items-center mb-4 p-3 bg-success-subtle border-2 border border-success rounded mx-md-2'>
                    <div className="fw-semibold  text-body-emphasis">Behavior & Mood</div>
                    <div className='display-5'>{props.calculatedMetrics.behaviorScore}</div>
                </div>
                </div>
                <div className='col-12 col-lg col-md-6 p-0'>
                <div className=' d-flex flex-column justify-content-center align-items-center mb-4 p-3 bg-info-subtle border-2 border border-info rounded mx-md-2'>
                    <div className="fw-semibold  text-body-emphasis">Caregiver Stress</div>
                    <div className='display-5'>{props.calculatedMetrics.caregiverScore}</div>
                </div>
                </div>
            </div>
        </div>
    )
}