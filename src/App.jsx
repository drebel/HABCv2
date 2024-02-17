import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HabcContainer from './components/HabcContainer';
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'

import './App.css'

function App() {
  const auth = getAuth()
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUserAuth(userAuth)
    })
    return () => unsubscribe()
  },[auth])

  return (
    <>
      {userAuth ? <h1>{userAuth.email}</h1> : <h1>Logged out</h1>}
      <HabcContainer />
      <Login />
      <Logout />
      <Signup />
    </>
  )
}

export default App
