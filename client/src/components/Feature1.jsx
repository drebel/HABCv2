import { Link } from 'react-router-dom'
import actionItems from "../assets/actionItems2.png"


export default function Feature1() {

    return (
        <>
            <div className="container px-4 my-4">
                <div className="row featurette py-5">
                    <div className="col-md-7 order-md-2 mb-3">
                        <h2 className="fw-bold text-body-emphasis">How to use HABC</h2>
                        <ul className="lh-lg fs-5">
                            <li>Every 2-12 weeks (depending on your previous score) fill out the HABC self-assessment questionnaire</li>
                            <li>See how your scores compare to the cutoffs</li>
                            <li>Read personalized education modules and tips based on your responses to better understand the symptoms you are seeing</li>
                            <li>Learn what human resources you can tap into to build your support network such as medical providers, the 24/7 help line, or involving friends and family</li>
                            <li>Choose action items you want to try to implement</li>
                            <li>Retest after 2-12 weeks to see how things changed</li>
                        </ul>
                        <div className='text-center'>

                            <Link to="habc" className="btn btn-primary btn-lg px-4 me-sm-3">Try HABC for Free</Link>
                        </div>
                    </div>
                    <div className="container col-md-5 mb-3">
                        <img src={actionItems} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Image of HABC scores and action items"  />
                    </div>
                </div>
            </div>
        </>

    )
}