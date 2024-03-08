import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation';

import HabcContainer from './pages/HabcContainer';
import LandingPage from './pages/LandingPage'
import Testing from './pages/Testing'


import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'

import './App.css'




function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))


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
        <Navigation 
          userAuth={userAuth}
        />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/habc' element={<HabcContainer />}/>
          <Route path='/testing' element={<Testing />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
