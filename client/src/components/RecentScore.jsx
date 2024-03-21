

export default function RecentScore(props){

    return(
        <div className='container px-4 py-5'>
        <div className='row'>
            <div className='col-12 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Total Score</div>
                <div className='display-5'>{props.recentScore.calculatedMetrics.totalScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Cognitive Subscore</div>
                <div className='display-5'>{props.recentScore.calculatedMetrics.cognitiveScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Functional Subscore</div>
                <div className='display-5'>{props.recentScore.calculatedMetrics.functionalScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div className="">Behavior & Mood Subscore</div>
                <div className='display-5'>{props.recentScore.calculatedMetrics.behaviorScore}</div>
            </div>
            <div className='col-12 col-md-6 col-lg d-flex flex-column justify-content-center align-items-center mb-4'>
                <div>Caregiver Stress Subscore</div>
                <div className='display-5'>{props.recentScore.calculatedMetrics.caregiverScore}</div>
            </div>
        </div>
    </div>
    )
}