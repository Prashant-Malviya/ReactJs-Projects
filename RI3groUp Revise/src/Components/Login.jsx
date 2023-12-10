import React from 'react'
import Template from './Template'
import loginImg from '../assets/loginImg.png'

function Login({setIsLoggedIn}) {
  return (
   <Template
    title="Welcome Back"
    desc1="Build Your Own Brand."
    desc2="The tool to make Your Business Next Level"
    image={loginImg}
    formtype='login'
    setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Login
