import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {

const navigate = useNavigate();

  function clickHandler(){
    navigate("/support");
  }
  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={clickHandler}>Move to support page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default About
