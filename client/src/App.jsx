import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation'
import AuthRequired from './components/AuthRequired'

import HabcContainer from './pages/HabcContainer'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import Testing from './pages/Testing'

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
        <Navigation 
          userAuth={userAuth}
        />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/habc' element={<HabcContainer />}/>
          <Route element={<AuthRequired userAuth={userAuth}/>}>
            <Route path='/dashboard' element={<DashboardPage 
              userAuth={userAuth}
            />}/>
          </Route>
          <Route path='/testing' element={<Testing />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
