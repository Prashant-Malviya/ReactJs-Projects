import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignUpForm({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPaasword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Passowords Do Not Match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-instructor-tab  */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* contains first and last name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>

        {/* email address */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter @email"
          />
        </label>

        {/* create password and confirm password */}

        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
            />
            <span onClick={() => setShowPaasword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
            />
            <span onClick={() => setShowPaasword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>
            Create Account
        </button>

      </form>
    </div>
  );
}

export default SignUpForm;
