import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { 
  BrowserRouter as Router,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
 } from 'react-router-dom'

import AuthRequired from './components/AuthRequired'

import { Layout, loader as authLoader } from './components/Layout'
import HabcContainer from './pages/HabcContainer'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import Testing from './pages/Testing'
import NotFound from './pages/NotFound';

import './App.css'


// const router = createBrowserRouter(createRoutesFromElements(
//   <Route element={<Layout 
//     userAuth={userAuth}
//     showLogin={showLogin}
//     toggleShowLogin={toggleShowLogin}
//     showSignup={showSignup}
//     toggleShowSignup={toggleShowSignup}/>
//     }
//   >
//     <Route path='/' element={<LandingPage />}/>
//     <Route path='habc' element={<HabcContainer 
//       showLogin={showLogin}
//       toggleShowLogin={toggleShowLogin}
//       showSignup={showSignup}
//       toggleShowSignup={toggleShowSignup}
//     />}/>
//     <Route element={<AuthRequired userAuth={userAuth}/>}>
//       <Route path='dashboard' element={<DashboardPage 
//         userAuth={userAuth}
//       />}/>
//     </Route>
//     <Route path='testing' element={<Testing />}/>
//     <Route path='*' element={<NotFound />} />
//   </Route>
// ))

function App() {

  const auth = getAuth()
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUserAuth(userAuth)
    })
    return () => unsubscribe()
  },[auth])

  const [showLogin, setShowLogin] = useState(false)

  function toggleShowLogin(){
    setShowLogin(prevShowLogin => !prevShowLogin)
  }

  const [showSignup, setShowSignup] = useState(false)

  function toggleShowSignup(){
    setShowSignup(prevShowSignup => !prevShowSignup)
  }

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route element={<Layout 
            auth={auth}
            userAuth={userAuth}
            showLogin={showLogin}
            toggleShowLogin={toggleShowLogin}
            showSignup={showSignup}
            toggleShowSignup={toggleShowSignup}/>
          }>
            <Route path='/' element={<LandingPage />}/>
            <Route path='habc' element={<HabcContainer 
              showLogin={showLogin}
              toggleShowLogin={toggleShowLogin}
              showSignup={showSignup}
              toggleShowSignup={toggleShowSignup}
            />}/>
            <Route element={<AuthRequired userAuth={userAuth}/>}>
              <Route path='dashboard' element={<DashboardPage 
                userAuth={userAuth}
              />}/>
            </Route>
            <Route path='testing' element={<Testing />}/>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App

