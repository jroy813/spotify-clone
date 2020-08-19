import React from 'react'
import logo from '../images/spotify-logo.png'
import '../css/Login.css'
import {loginUrl} from '../spotify'

function Login() {
    return (
        <div className="login">
            <img src={logo} alt=""/>
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login
