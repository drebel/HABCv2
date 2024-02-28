import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    
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

    function handleLogin(e){
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user has signed in',user)
            // ...
        })
        .catch((error) => {
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
                <button className=''>Login</button>
            </form>
        </>
    )
}