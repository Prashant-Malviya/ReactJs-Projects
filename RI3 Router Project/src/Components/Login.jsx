import React from 'react'
import Template from './Template'
import loginImg from '../assets/loginImg.png'

function Login({setIsLoggedIn}) {
  return (
    <Template
        title="Welcome Back"
        desc1="Build Skills for today, tomorrow,and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsloggedIn={setIsLoggedIn}
    />
  )
}

export default Login
