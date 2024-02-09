import React from 'react'
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

export default function Signup(){
    
    const [formData, setFormData] = React.useState({
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

    function handleLogin(e){
        e.preventDefault()
        if(formData.password != formData.confirmPassword){
            console.log('passwords do not match')
            return
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log('user signed up!')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.error(error)
          });
    }

    return(
        <>
            <h2>Login</h2>
            <form onChange={handleChange} onSubmit={handleLogin}>
                <input name='email' placeholder='Email' type="text" />
                <br />
                <input name='password' placeholder='Password' type="password" />
                <br />
                <input name='confirmPassword' placeholder='Confirm Password' type="password" />
                <br />
                <button>Login</button>
            </form>
        </>
    )
}