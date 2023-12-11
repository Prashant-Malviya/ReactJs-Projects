import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email: "",
        password : ""
    })

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully")
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'
    >
      
        <label className='w-full'>
            <p className='text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] '>
                Email Address <sup className='text-red-400'>*</sup>
            </p>
            <input 
                required
                name='email'
                type='text'
                value={formData.email}
                onChange={changeHandler}
                placeholder='enter email'
                className='bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]' 
            />
        </label>


        <label className='w-full relative'>
            <p className='text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] '>
                Password <sup className='text-red-400'>*</sup>
            </p>
            <input 
                required
                name='password'
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='enter password'
                className='bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> ) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto'>Forgot Password</p>
            </Link>

        </label>

        <button className='bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-6'>Sign In</button>



    </form>
  )
}

export default LoginForm
