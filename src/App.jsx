import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation';

import HabcContainer from './pages/HabcContainer';
import LandingPage from './pages/LandingPage'


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
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/habc' element={<HabcContainer />}/>
        </Routes>
      </Router>
      {/* {userAuth ? <h1>{userAuth.email}</h1> : <h1>Logged out</h1>}
      <HabcContainer />
      <Login />
      <Logout />
      <Signup /> */}
      {/* <LandingPage /> */}
    </>
  )
}

export default App
