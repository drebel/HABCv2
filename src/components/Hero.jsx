

export default function Hero(){

    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Dementia "Blood Pressure Cuff"</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Just like you'd monitor blood pressure, you can use the <strong>Healthy Aging Brain Care Monitor</strong> to track the progression of dementia symptoms over time and measure caregiver burnout so you can get appropriate help as soon as possible</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</button>
                <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3393358/' target='_blank' rel='noreferrer' className="btn btn-outline-secondary btn-lg px-4">Read the research</a>
            </div>
        </div>
        <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
            <div className="container px-5">
                <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
            </div>
            </div>
    </div>
    )
}