import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  // for showpassword handler
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not matched!!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Successfully");
    navigate("/dashboard");
  }

  return (
    <div>
      {/* student instructor tab */}
      <div className="flex bg-gray-800 gap-x-1  my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-gray-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-gray-200"
          } py-2 px-4 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* contains first and last name */}
        <div className="flex justify-between mt-[10px]">
          <label>
            <p className="text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] ">
              First Name <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />
          </label>

          <label>
            <p className="text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] ">
              Last Name <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />
          </label>
        </div>

        {/* email address  */}

        <label className="w-full mt-[10px]">
          <p className="text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] ">
            Email Address <sup className="text-red-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={formData.email}
            className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
          />
        </label>

        {/* password and confirm password */}
        <div className="flex gap-x-4 justify-between mt-[10px]">
          <label className="relative">
            <p className="text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] ">
              Create Password <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.87rem] text-gray-100 mb-1 leading-[a.37rem] ">
              Confirm Password <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={confirmShowPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[40px] cursor-pointer"
              onClick={() => setConfirmShowPassword((prev) => !prev)}
            >
              {confirmShowPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
