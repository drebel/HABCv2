import React from 'react'

export default function ActionItems(props){
    
    const [twoWeeks, setTwoWeeks] = React.useState(true)
    const [retestDate, setRetestDate] = React.useState()

    React.useEffect(() => {
        if(props.recentScore){
            const recentDate = props.recentScore.createdAt
            if(
                props.recentScore.calculatedMetrics.totalScore > 14 ||
                props.recentScore.calculatedMetrics.behaviorScore > 1 || 
                props.recentScore.calculatedMetrics.caregiverScore > 0
            ){
                const twoWeeksLater = new Date(recentDate)
                twoWeeksLater.setDate(twoWeeksLater.getDate() + 14)
                const twoWeeksStr = `${twoWeeksLater.getMonth() + 1}/${twoWeeksLater.getDate()}/${twoWeeksLater.getFullYear() % 100}`
                setRetestDate(twoWeeksStr)
                setTwoWeeks(true)
            }else{
                const threeMonthsLater = new Date(recentDate)
                threeMonthsLater.setDate(threeMonthsLater.getDate() + 84)
                const threeMonthsStr = `${threeMonthsLater.getMonth() + 1}/${threeMonthsLater.getDate()}/${threeMonthsLater.getFullYear() % 100}`
                setRetestDate(threeMonthsStr)
                setTwoWeeks(false)
            }
        }
    },[props.recentScore])
    

    const accordionTipElements = props.tips.map((item, index) => {
        const collapseId = `collapse${index}`
        const parentId = `accordionItemTips${index}`

        return (

            <div className="accordion-item" key={`accordionItem${index}`}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="true" aria-controls={collapseId}>
                        <h2 className=''>{item.title}</h2>
                    </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        {item.content}
                    </div>
                </div>
            </div>
        )
    })



    return(
        <div className="container px-4 py-5">
        <h2>Action Items:</h2>
        <div className="accordion" id="accordionItems">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h2 className=''>1. Understanding My Score</h2>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionItem1">
                    <div className="accordion-body">
                        <div className="row">
                            {
                                props.recentScore.calculatedMetrics.totalScore > 14 ?
                                <p className="col-12">Your total score is over 14 which may indicate you are at higher risk for burnout due to increased dementia symptoms. The ultimate goal is to get your total score below 15 or reduced by 50% in 12 months.</p>
                                :
                                <p className="col-12">Your total score is under 15 which is meeting the goal of 14 or less! Since dementia is a progressive contidion, this score may change in the future. If this score goes up it does not mean you are doing a bad job, it just means your loved one's needs are changing and we need to change how we are providing care to them.</p>
                            }
                            {/* <table className="col-12 col-md-4 px-2">
                                <tr>
                                    <td>Normal Range:</td>
                                    <td>Less than 15</td>
                                </tr>
                                <tr>
                                    <td>Mild Symptoms:</td>
                                    <td>15-23</td>
                                </tr>
                                <tr>
                                    <td>Moderate Symptoms:</td>
                                    <td>24-35</td>
                                </tr>
                                <tr>
                                    <td>Severe Symptoms:</td>
                                    <td>36 or more</td>
                                </tr>
                            </table> */}
                        </div>
                        <div className="row">
                            {
                                props.recentScore.calculatedMetrics.cognitiveScore > 4 ?
                                <p>Your cognitive subscore is greater than 4 which indicates possible mild cognitive impairment. This warrents follow up with your loved one's healthcare provider for furhter clinical examination. The cognitive score is a helpful for screening for if their thinking is currently altered. The cognitive score can help you track how their thinking changes over time and how they respond to different medications and non-pharmacological treatments.</p>
                                :
                                <p>The cognitive score is useful for screening for mild cogntive impairment. Your cognitive score is under 5 which does not meet the threshold to require further medical screening. However, if you are concerned about your loved one's thinking, don't let this score stop you from reaching out to your health care provider to talk what you are seeing. Dementia is a progressive contidion so this score may change in the future. If this score goes up it does not mean you are doing a bad job, it just means your loved one's needs are changing and we need to change how we are supporting them.</p>
                            }
                            {/* <table className="col-12 col-md-4 px-2">
                                <tr>
                                    <td>Normal Range:</td>
                                    <td>Less than 5</td>
                                </tr>
                                <tr>
                                    <td>Mild Symptoms:</td>
                                    <td>5-8</td>
                                </tr>
                                <tr>
                                    <td>Moderate Symptoms:</td>
                                    <td>9-11</td>
                                </tr>
                                <tr>
                                    <td>Severe Symptoms:</td>
                                    <td>12 or more</td>
                                </tr>
                            </table> */}
                        </div>
                        <div className="row">
                            <p>The functional score is not used a screening tool like the cognitive score but it is still helpful at monitoring your loved one's functional changes over time and their response to different treatments.</p>
                            {/* <table className="col-12 col-md-4 px-2">
                                <tr>
                                    <td>Normal Range:</td>
                                    <td>Less than 4</td>
                                </tr>
                                <tr>
                                    <td>Mild Symptoms:</td>
                                    <td>4-6</td>
                                </tr>
                                <tr>
                                    <td>Moderate Symptoms:</td>
                                    <td>7-11</td>
                                </tr>
                                <tr>
                                    <td>Severe Symptoms:</td>
                                    <td>12 or more</td>
                                </tr>
                            </table> */}
                        </div>
                        <div className="row">
                            {
                                props.recentScore.calculatedMetrics.behaviorScore > 1 ?
                                <p>Your behavior and mood score is over 1 which may indicate you are at higher risk for burnout because increased dementia behaviors is one of the major factors contributing to caregiver burnout. The ultimate goal is to get your behavior score below 2 or reduced by 50% in 12 months. The good news is there are many effective non-pharamacological treatments to help with dementia behaviors depending on what your loved one is experiencing. There are also medications that can be used but those are typically only used in specific situations because of the potential side effects. You should talk with your loved one's healthcare provider to figure out what treatments would be best for your situation. This might include a referral to a geropsych physician, arranging for additional caregiving support at home, exploring medication options, or seeking counseling to develop effective strategies to understand and change these behaviors. Tracking this score is very helpful to see which treatments are helping over time.</p>
                                :
                                <p>Your behavior and mood score is under 2 which is meeting the goal of 1 or less! Since dementia is a progressive contition this score may change in the future. Changes in the score doesn't mean you are doing a bad job, just that we need to change the way we are supporting your loved one. Don't let this score stop you from sharing what you are experiencing or asking for help from friends, family, or healthcare providers.</p>
                            }
                            {/* <table className="col-12 col-md-4 px-2">
                                <tr>
                                    <td>Normal Range:</td>
                                    <td>Less than 6</td>
                                </tr>
                                <tr>
                                    <td>Mild Symptoms:</td>
                                    <td>6-7</td>
                                </tr>
                                <tr>
                                    <td>Moderate Symptoms:</td>
                                    <td>7-11</td>
                                </tr>
                                <tr>
                                    <td>Severe Symptoms:</td>
                                    <td>12 or more</td>
                                </tr>
                            </table> */}
                        </div>
                        <div className="row">
                            {
                                props.recentScore.calculatedMetrics.caregiverScore > 0
                                ?
                                <p>Your caregiver stress score is over 0 which may indicate you are at a higher risk for burnout because increased caregiver stress is another major factor contributing to burnout. The ultimate goal to get it below 1 or reduced by 50% in 12 months. This score may the most important to track so you can see how your own stress changes over time and with different treatments for you and your loved one. Taking care of yourself is one of the most important things you can do as a caregiver. You can't for someone else at your fullest with an empty tank, but we know that is easier said than done.</p>
                                :
                                <p>Your caregiver stress score is 0 which is inline with the ultimate goal of below 1! This might change in the future but doesn't mean you are doing a bad job. Tracking this score is important so so you can see how your own stress changes with different treatments for you and your loved one and over time.</p>
                            }
                            {/* <table className="col-12 col-md-4 px-2">
                                <tr>
                                    <td>Normal Range:</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Mild Symptoms:</td>
                                    <td>1-4</td>
                                </tr>
                                <tr>
                                    <td>Moderate Symptoms:</td>
                                    <td>5-8</td>
                                </tr>
                                <tr>
                                    <td>Severe Symptoms:</td>
                                    <td>9 or more</td>
                                </tr>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h2 className=''>2. Personalized Tips</h2>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionItem2">
                    <div className="accordion-body">
                        <p>Here are a few education modules for you based on your responses:</p>
                        <ul>
                            {props.tips.map((item,index) => {
                                return <li key={`tip${index}`}>{item.title}</li>
                            })}
                        </ul>

                        <div className="accordion" id="accordionItemsTips">
                            {accordionTipElements}
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`} aria-expanded="true" aria-controls={`collapse`}>
                                        <h2 className=''>test</h2>
                                    </button>
                                </h2>
                                <div id={`collapse`} className="accordion-collapse collapse" aria-labelledby={`heading`} data-bs-parent="#accordionItems">
                                    <div className="accordion-body">
                                        test
                                    </div>
                                </div>
                            </div> */}
                        </div>


                        <p>Did these tips not cover what you were looking for? Let us know and we'll be happy to add more modules.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9y6XL0VwfaWXhWERPpqpo4kE-E2bqsblW8Owp9qMtp9TKcw/viewform" rel="noreferrer" target="_blank">Submit Feedback Here!</a>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h2 className=''>3. Get Human Help</h2>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionItem3">
                    <div className="accordion-body">
                        <p>If you haven't talked to both your loved one's primary care provider about your concerns, we highly encourage you to do that so you can have the full support of your health care team. If you don't have a medical power of attorney set up, you likely wont have full access to their healthcare information but you can call the provider with your loved one. You should also talk to your own provider about being a caregiver so you can get the support for your own health, whether its counseling or care for your own health conditions. Sometimes it can take a little bit before you can get in to see your provider so reach out as soon as possible. Getting the right diagnosis can really open up a lot of resources for your loved one.</p>
                        <p>If you are needing to talk to a human who is familiar with dementia, the Alzheimer's Association is a good FREE resource. They have a 24/7 support helpline you can call day or night. 800-272-3900</p>
                        <p>If you have friends or family, reach out to them too and let them know whats going on. Taking care of a loved one truly takes a village. Getting more people involved sooner is feedback we hear from many caregivers.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <h2 className=''>4. When to Retest</h2>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionItem4">
                    <div className="accordion-body">
                        <p>Based on your score, you should take the HABC questionnaire again in {twoWeeks ? '2 weeks' : '3 months'} ({retestDate})</p>
                        {/* <p>If you want an email reminder to retest on DATE please check this box.</p> */}
                        <p>During these {twoWeeks ? '2 weeks' : '3 months'}, try out some of the tips you read in the education modules, talk to healthcare experts to get professional advice, and let family and friends know what is going on.</p>
                        <p>When you retest in {twoWeeks ? '2 weeks' : '3 months'} you will be able to see what is working and what isn't.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}