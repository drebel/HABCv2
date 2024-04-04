import {Link} from 'react-router-dom'
import habctest from '../assets/habctest.png'

export default function Hero(){

    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-4 fw-bold text-body-emphasis">Help keep loved ones with dementia at home</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead">Track the progression of dementia symptoms and measure caregiver burnout so you can get help as soon as possible</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link to="habc" className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</Link>
                </div>
            </div>
            <div className="container">
                <img src={habctest} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Line/scatter plot of HABC results"  />
            </div>
        </div>
    )
}