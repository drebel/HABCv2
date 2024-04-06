

export default function FeatureWithIcons(){

    return (
        <>
            <div className="container px-4 my-4">
                {/* <h2 className="pb-2 border-bottom">Features with title</h2> */}

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">What is the Healthy Aging Braing Care Monitor?</h2>
                        <p>The Healthy Aging Brain Care Monitor (HABC) was developed by a team of 22 dementia experts to give caregivers a tool to measure different dementia symptoms at home and assess how much its affecting their loved one's life.</p>
                        <p className="text-body-emphasis">By tracking these scores over time, it is easier for you and your loved one's physician to understand how effective a treatement is at reducing symptoms and how to modify the treatment plan going forward.</p>
                        <p>HABC scores are respsonsive to the severity of symptoms as well as interventions. HABC was the most sensitive at measuring behavior symptoms and the response to treatment.</p>
                        <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3393358/' target='_blank' rel='noreferrer' className="btn btn-outline-secondary btn-lg px-4">Read the research</a>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className=" p-3 bg-danger-subtle border-2 border border-danger rounded">
                            <h4 className="fw-semibold  text-body-emphasis">Cognitive</h4>
                            <p className="text-body-secondary">Thinking, judgement, memory, handling finances & other complex tasks are assessed in this domain</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-warning-subtle border-2 border border-warning rounded">
                            <h4 className="fw-semibold  text-body-emphasis">Physical Function</h4>
                            <p className="text-body-secondary">Preparing meals, falling, bathing, and other tasks about their abilities at home are assessed in this domain</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-success-subtle border-2 border border-success rounded">
                            <h4 className="fw-semibold  text-body-emphasis">Behaviors & Mood</h4>
                            <p className="text-body-secondary">Sleep changes, wandering, hallucinations, feeling down & other changes are assessed in this domain</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-info-subtle border-2 border border-info rounded">
                            <h4 className="fw-semibold  text-body-emphasis">Caregiver Stress</h4>
                            <p className="text-body-secondary">Your quality of life is important too. This domain assesses how caregiving affects areas of your life</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}