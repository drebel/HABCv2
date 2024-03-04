import NewsletterForm from "./NewsletterForm"

export default function CenteredHero(){

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h2 className="display-5 fw-bold text-body-emphasis">Development Notes</h2>
            <div>
                Current Version 1.2.0
                <a href="https://github.com/drebel/HABCv2/issues">Feature Backlog</a>
            </div>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">I'm making a prioitized list of features. If you have new ideas or want to give some higher priority to one of the points on the list simply send me some feedback. </p>
                <div className="d-grid d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Send Feedback</button>
                   <NewsletterForm />
                </div>
            </div>
        </div>
    )
}