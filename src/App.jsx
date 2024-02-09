// import React, { useState, useEffect } from 'react'

import Questionnaire from './components/Questionnaire'
import Results from './components/Results'
import Login from './components/Login'

import './App.css'

function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(null)

  return (
    <>
      <Login />
      <Questionnaire />
      <Results />
      {/* {isAuthenticated ? (
        <Questionnaire setIsAuthenticated={setIsAuthenticated}/>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )} */}
    </>
  )
}

export default App
