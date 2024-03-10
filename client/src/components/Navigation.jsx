import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'
import Logout from './Logout'

export default function Navigation(props){

  const [showLogin, setShowLogin] = React.useState(false)

  function toggleShowLogin(){
    setShowLogin(prevShowLogin => !prevShowLogin)
  }

  const [showSignup, setShowSignup] = React.useState(false)

  function toggleShowSignup(){
    setShowSignup(prevShowSignup => !prevShowSignup)
  }

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-3">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <svg height="50px" width="50px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.00 512.00" fill="#000000" stroke="#000000" strokeWidth="0.00512" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke="#CCCCCC" strokeWidth="1.024"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path d="M510.909,157.835c-6.323-38.097-41.228-48.606-54.55-57.191c-13.329-8.584,0.02-26.665-9.502-26.672 c-9.53-0.014-16.184-7.64-18.08-13.35c-1.904-5.723-8.571-3.82-12.391,7.606c-3.82,11.425-4.689,43.324,29.464,60.024 c39.028,19.087,34.553,60.032,7.888,61.28c-33.525,1.572-39.352-21.652-51.716-44.524c-12.357-22.866-39-35.277-59.963-33.388 c-7.675,0.689-19.962,2.655-32.45,4.875c-18.342,3.386-43.745,8.385-43.745,8.385c-7.612-8.578-20.934-21.921-47.606-16.239 c-14.694,3.137-37.222,12.963-48.902,36.78c-2.772,7.592-4.468,16.576-4.468,27.313c0,14.218,2.979,31.478,10.399,52.309 c7.309,20.486,18.555,34.697,31.422,43.889c12.874,9.185,27.464,13.364,41.586,13.364c12.157,0,23.941-3.118,33.836-8.785 c9.902-5.668,17.894-13.826,22.706-23.961c3.214-6.764,5.034-14.426,5.048-22.983c0-1.034-0.034-2.096-0.082-3.158l10.542-0.531 c0.062,1.234,0.09,2.468,0.09,3.689c0.014,10.068-2.172,19.348-6.054,27.519c-3.889,8.172-9.46,15.226-16.163,20.97 c-13.418,11.488-31.318,17.797-49.923,17.804c-16.204,0-32.988-4.82-47.716-15.328c-14.735-10.502-27.319-26.672-35.235-48.944 c-7.737-21.714-11.02-40.159-11.02-55.852c0-7.123,0.69-13.66,1.938-19.68C85.171,164.889,50.914,219.694,44.116,274.41 c-10.901,14.763-29.506,35.925-40.304,44.572c-12.915,10.315,8.55,17.404,40.876,1.234c-0.097-0.855-0.172-1.73,0.096-0.034 C56.203,392.556,66.56,454.504,66.56,454.504h84.497c0,0,8.578-39.138,12.674-52.812c12.681-42.248,52.819-33.27,56.281,4.2 c1.034,11.143,4.985,48.612,4.985,48.612h80.27l32.781-124.8c0,0,9.998-31.519,29.568-44.73c13.39-9.047,41.897-1.862,46.668-4.717 c4.758-2.854-7.799-15.97-14.266-21.914c-8.564-7.916-18.363-23.83,0.345-20.617c13.515,2.324,33.974,3.758,46.13,2.192 C503.697,233.699,516.157,189.575,510.909,157.835z"></path> </g> </g></svg>
            </Link>
          </div>
    
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2">Home</Link></li>
            <li><Link to="/habc" className="nav-link px-2">HABC</Link></li>

            {
              props.userAuth && 
              <li><Link to="/dashboard" className="nav-link px-2">Dashboard</Link></li>
            }
            <li><Link to="/testing" className="nav-link px-2">Testing</Link></li>
          </ul>
    
          <div className="col-md-3 text-end">
            {
              props.userAuth ? 
              <>
              <span>{props.userAuth.displayName}</span> 
              <Logout />
              </> :
              <>
                <button type="button" className="btn btn-outline-primary me-2" onClick={toggleShowLogin}>Login</button>
                <button type="button" className="btn btn-primary" onClick={toggleShowSignup}>Sign-up</button>
              </>
            }

            {showLogin && <Login 
              toggleShowLogin={toggleShowLogin}
            />}
            {showSignup && <Signup 
              toggleShowSignup={toggleShowSignup}
            />}


          </div>
        </header>
    )
}