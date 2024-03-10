import React from "react";
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired(props){

    const isLoggedIn = props.userAuth
    if(!isLoggedIn){
        return <Navigate to="/" />
    }
    return <Outlet />
}