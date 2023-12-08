import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/about");
  }

  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
      <h1>Labs Page</h1>
      <button onClick={clickHandler}>Move to About Page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Labs
