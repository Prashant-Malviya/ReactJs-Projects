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
    <form onSubmit={submitHandler}>
      
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input 
                required
                name='email'
                type='text'
                value={formData.email}
                onChange={changeHandler}
                placeholder='enter email'
            />
        </label>


        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input 
                required
                name='password'
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='enter password'
            />

            <span onClick={()=> setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>Forgot Password</p>
            </Link>

        </label>

        <button>SignIn</button>



    </form>
  )
}

export default LoginForm
