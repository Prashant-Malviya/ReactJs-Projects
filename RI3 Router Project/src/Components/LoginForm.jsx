import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({setIsloggedIn}) {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    passoword: "",
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
    setIsloggedIn(true);
    toast.success("Logged In successfull");
    navigate("/dashboard")

  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          name = "passoword"
          type={showPassword ? "text" : "password"}
          value={formData.passoword}
          onChange={changeHandler}
          placeholder="Enter Password"
        />

        <span onClick={() => setShowPaasword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

        <button>
            SignIn
        </button>

    </form>
  );
}

export default LoginForm;
