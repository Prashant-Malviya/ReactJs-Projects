import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support() {

const navigate = useNavigate();

  function clickHandler(){
    navigate("/");
  }
  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
        
      <h1>Support Page</h1>
      <button onClick={clickHandler}>Move to main page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support
