import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frame2 from "../assets/frame2.jpg"
import {FcGoogle} from "react-icons/fc"

function Template({title,desc1,desc2,image, formtype,setIsLoggedIn}) {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y">
      
        <div className='w-11/12 max-w-[450px] mx-0'>
            <h1 className='text-gray-100 font-semibold text-[1.875rem]  leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span className='text-gray-100'>{desc1}</span>
                <br />
                <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn} />) }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-gray-500'></div>
                <p className='text-gray-700'>OR</p>
                <div className='w-full h-[1px] bg-gray-500'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-100 border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>SignUp with google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame2}
            alt='frame'
            width={558}
            height={504}
            loading='lazy' />

            <img src={image}
            alt='login'
            width={550}
            height={490}
            loading='lazy' 
            className='absolute top-4 right-4'
        
            />
        </div>

    </div>
  )
}

export default Template
