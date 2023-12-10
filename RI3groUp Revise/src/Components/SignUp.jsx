import React from 'react'
import signUPImg from '../assets/signUpImg.jpg'
import Template from './Template'

function SignUp({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build Your Own Brand."
    desc2="The tool to make Your Business Next Level"
    image={signUPImg}
    formtype='signup'
    setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default SignUp
