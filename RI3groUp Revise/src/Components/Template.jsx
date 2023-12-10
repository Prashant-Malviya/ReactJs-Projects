import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frame from "../assets/frame.jpg"

function Template({title,desc1,desc2,image, formtype,setIsLoggedIn}) {
  return (
    <div>
      
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn} />) }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>SignUp with google</p>
            </button>

        </div>

        <div>
            <img src={frame}
            alt='frame'
            width={558}
            height={504}
            loading='lazy' />

            <img src={image}
            alt='login'
            width={550}
            height={490}
            loading='lazy' />
        </div>

    </div>
  )
}

export default Template
