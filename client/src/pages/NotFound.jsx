import { Link } from 'react-router-dom'

export default function NotFound(){
    return (

        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="">Sorry, the page you're looking for was not found.</h1>
            <Link to='/' className='btn btn-primary btn-lg'>Go to Home</Link>
        </div>
    )
}