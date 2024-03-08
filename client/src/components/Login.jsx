import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login(props){
    
    const [formData, setFormData] = React.useState({
        email:'',
        password:''
    })

    function handleChange(e){
        const {name,value} = e.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]:value
            }
        })
    }

    async function handleLogin(e){
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user has signed in',user)
            props.toggleShowLogin()
        })
        .catch((error) => {
            console.error(error)
        });
    }

    function handlePasswordReset(e){
        e.preventDefault()
        console.log('reset password but make sure email field is filled out')
    }

    return(
        <>
            <div className="modal modal-sheet position-fixed d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Log In</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggleShowLogin}></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onChange={handleChange} >
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" name='email' placeholder="name@example.com"></input>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" name='password' placeholder="Password"></input>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" onClick={handleLogin}>Log in</button>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-outline-primary" onClick={handlePasswordReset}>Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}