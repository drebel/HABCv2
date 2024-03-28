import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import Header from './Header'

export function loader(){
    return 'loaded auth data'
}

export function Layout(props){

    // const data = useLoaderData()
    // console.log(data)
    
    return (
        <>
            <Header 
                auth={props.auth}
                userAuth={props.userAuth}
                showLogin={props.showLogin}
                toggleShowLogin={props.toggleShowLogin}
                showSignup={props.showSignup}
                toggleShowSignup={props.toggleShowSignup}
            />
            <Outlet />
        </>
    )
}