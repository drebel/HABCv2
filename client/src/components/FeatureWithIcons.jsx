

export default function FeatureWithIcons(){

    return (
        <>
            <div className="container px-4 py-5">
                {/* <h2 className="pb-2 border-bottom">Features with title</h2> */}

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">What is Healthy Aging Braing Care Monitor?</h2>
                        <p>The Healthy Aging Brain Care Monitor (HABC) was developed by a team of 22 dementia experts to help identify caregiver burnout and connect caregivers and their loved ones with holistic care.</p>
                        <p className="text-body-emphasis">The HABC consists of 31 questions that cover four important areas for dementia care. By tracking burnout and symptoms over time it is easier for your loved one's physician to understand how to modify the treatment plan</p>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                        {/* <use xlink:href="#collection" /> */}
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Cognition</h4>
                                 <p className="text-body-secondary">How your loved one thinks and remembers</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                    {/* <use xlink:href="#gear-fill" /> */}
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Physical Function</h4>
                                <p className="text-body-secondary">How safe your loved one is moving around what what they need help doing</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                    {/* <use xlink:href="#speedometer" /> */}
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Behavior and Mood</h4>
                                <p className="text-body-secondary">How they are feeling </p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                    {/* <use xlink:href="#table" /> */}
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Caregiver Stress</h4>
                                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider"></hr>

        </>
    )
}