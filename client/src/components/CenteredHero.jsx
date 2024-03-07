import NewsletterForm from "./NewsletterForm"

export default function CenteredHero(){

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold text-body-emphasis">Development Notes</h2>
            <div className="lead">
                <span className="px-2">
                    Current Version 1.2.0
                </span>
                <a href="https://github.com/drebel/HABCv2/issues">Feature Backlog</a>
            </div>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">I'm making a prioitized list of features. If you have new ideas or want to give higher priority to one of the points on the list, please send me some feedback. </p>
                <div className="d-grid d-sm-flex justify-content-sm-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9y6XL0VwfaWXhWERPpqpo4kE-E2bqsblW8Owp9qMtp9TKcw/viewform" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">Send Feedback</a>
                    <span className="d-flex align-items-center px-3">OR</span>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFi5Nkt6Vui55GBzAycDCNFcjk8ThX5ztYem_xxkQQ0XjsTQ/viewform" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">Get Updates by Email</a>
                </div>
            </div>
        </div>
    )
}