import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

function SignUpForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName: "",
        lastName : "",
        email : "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword,setShowPassword] = useState(false);
    const [confirmShowPassword,setConfirmShowPassword] = useState(false);

    // for showpassword handler
    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }

    // // for confirm shorw password handler

    // function confirmChangeHandler(event){
    //     setFormData( (prevData) =>(
    //         {
    //             ...prevData,
    //             [event.target.name] : event.target.value
    //         }
    //     ) )
    // }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not matched!!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created Successfully")
        navigate('/dashboard')
    }

  return (
    <div>
      
      {/* student instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
      {/* contains first and last name */}
        <div>
            <label>
                <p>First Name <sup>*</sup></p>
                <input 
                required
                type="text"
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                 />
            </label>

            <label>
                <p>Last Name <sup>*</sup></p>
                <input 
                required
                type="text"
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastName}
                 />
            </label>
        </div>

        {/* email address  */}

            <label>
                <p>Email Address <sup>*</sup></p>
                <input 
                required
                type="email"
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email'
                value={formData.email}
                 />
            </label>

        {/* password and confirm password */}
        <div>
        <label>
                <p>Create Password <sup>*</sup></p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                 />

                <span onClick={()=> setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

        </label>

        <label>
                <p>Confirm Password <sup>*</sup></p>
                <input 
                required
                type={confirmShowPassword ? ("text") : ("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                 />

                <span onClick={()=> setConfirmShowPassword((prev) => !prev)}>
                {confirmShowPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

        </label>
            
        </div>

        <button>
            Create Account
        </button>

      </form>

    </div>
  )
}

export default SignUpForm
