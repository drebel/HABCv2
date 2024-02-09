import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Questionnaire from './components/Questionnaire'
import Results from './components/Results'
import Login from './components/Login'
import Logout from './components/Logout'

import './App.css'

function App() {
  const auth = getAuth()
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUserAuth(userAuth)
    })
    return () => unsubscribe()
  },[])

  return (
    <>
      {userAuth ? <h1>{userAuth.email}</h1> : <h1>Logged out</h1>}
      <Login />
      <Logout />
      <Questionnaire />
      <Results />
    </>
  )
}

export default App
