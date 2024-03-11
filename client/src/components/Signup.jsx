import React from 'react'
import { getAuth, createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Signup(props){

    const navigate = useNavigate()
    
    const [formData, setFormData] = React.useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
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

    async function handleSignup(e){
        e.preventDefault()
        if(formData.password != formData.confirmPassword){
            console.log('passwords do not match')
            return
        }
        try{
            console.log(formData)
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: formData.username
            })
            console.log('user signed up!')
            console.log(user)
            
            if(localStorage.getItem('guestScore')){
                props.addGuestScore(user)
                props.toggleShowSignup()

                navigate('/dashboard')
            }else{
                props.toggleShowSignup()
            }
        }catch(error){
            console.error(error)
        }
    }

    return(
        <>
            {/* <h2>Signup</h2>
            <form onChange={handleChange} onSubmit={handleLogin}>
                <input name='email' placeholder='Email' type="text" />
                <br />
                <input name='password' placeholder='Password' type="password" />
                <br />
                <input name='confirmPassword' placeholder='Confirm Password' type="password" />
                <br />
                <button>Login</button>
            </form> */}

            <div className="modal modal-sheet position-fixed d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Sign Up For Free</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggleShowSignup}></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form onChange={handleChange} onSubmit={handleSignup}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="floatingSignupUsername" name='username' placeholder="Username"></input>
                                    <label htmlFor="floatingSignupUsername">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingSignupEmail" name='email' placeholder="name@example.com"></input>
                                    <label htmlFor="floatingSignupEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" name='password' placeholder="Password"></input>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingConfirmPassword" name='confirmPassword' placeholder="Confirm Password"></input>
                                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Sign up</button>
                                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}