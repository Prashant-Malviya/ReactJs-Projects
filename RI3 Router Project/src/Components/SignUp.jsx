import React from 'react'
import signUpImg from '../assets/signUpImg.jpg'
import Template from './Template'

function SignUp({setIsloggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build Skills for today, tomorrow,and beyond."
    desc2="Education to future-proof your career."
    image={signUpImg}
    formtype="signup"
    setIsloggedIn={setIsloggedIn}
/>
  )
}

export default SignUp
