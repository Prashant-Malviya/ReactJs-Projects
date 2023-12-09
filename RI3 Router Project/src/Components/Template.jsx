import React from "react";
import frame from "../assets/frame.jpg"
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {
            formtype === "signup" ? (<SignUpForm setIsloggedIn={setIsLoggedIn} />) : (<LoginForm setIsloggedIn={setIsLoggedIn} />)
        }

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

        <div>
            <img 
            src={frame} 
            alt="frame" 
            width={558} 
            height={584}
            loading="lazy"
            />
            <img 
            src={image} 
            alt="students" 
            width={550} 
            height={574}
            loading="lazy"
            />
        </div>

    </div>
  );
}

export default Template;
