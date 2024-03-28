import React from "react";
import { Outlet, Navigate } from 'react-router-dom'

export function loader(){
    return "logged in data goes here"
}

export default function AuthRequired(props){

    const isLoggedIn = props.userAuth
    if(!isLoggedIn){
        return <Navigate to="/" />
    }
    return <Outlet />
}