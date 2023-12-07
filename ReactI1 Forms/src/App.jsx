import { useState } from 'react'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event){
  //   setFirstName(event.target.value);
  //   // console.log("first name : "+firstName)

  //   // console.log(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   setLastName(event.target.value);
  //   // console.log("Last name : "+ lastName)
  //   // console.log(event.target.value);
  // }

  // console.log(firstName)
  // console.log(lastName)

  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "",
      email : "",
      comments : "",
      isVisible : false,
      mode : "",
      favCar: ""
    }
  )

  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value

        [name] : type === "checkbox" ? checked : value
      }
    })
  }
  


function submitHandler(event){
  event.preventDefault();
  console.log("final form ka data")
  console.log(formData)
}

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='first name'
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
         />
         <br />
         <br />
      
        <input 
        type="text"
        placeholder='last name'
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
         />
         
         <br />
         <br />

        <input 
        type="email"
        placeholder='email'
        onChange={changeHandler}
        name="email"
        value={formData.email}
         />

         <br />
         <br />

         <textarea
          placeholder='Comments here'
          onChange={changeHandler}
          name = "comments"
          value={formData.comments}
          
         />

         <br /><br />
          <label htmlFor='isVisible'>Am I visible ? </label>
         <input 
         type="checkbox"
         onChange={changeHandler}
         name = "isVisible"
         checked={formData.isVisible}
         id='isVisible'
          />

          <br /><br />

          <fieldset>
            <legend> Mode: </legend>

            <label htmlFor="Online-Mode">Onine </label>
          <input 
          type="radio"
          onChange={changeHandler}
          name = "mode"
          value="Online-Mode"
          id='Online-Mode'
          checked = {formData.mode === "Online-Mode"}
           />

           <label htmlFor="Offline-Mode"> Offline </label>
          <input 
          type="radio"
          onChange={changeHandler}
          name = "mode"
          value="Offline-Mode"
          id='Offline-Mode'
          checked = {formData.mode === "Offline-Mode"}
           />

          </fieldset>
          <br />
          <label htmlFor="favCar">Tell Me Your Favourite Car </label>
          <select
          onChange={changeHandler} 
          name="favCar" 
          id="favCar"
          value={formData.favCar}
          >
          <option value="scorpio">Scarpio</option>
          <option value="faturner">Fartuner</option>
          <option value="tharr">Tharr</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
          </select>
          <br /><br />
          {/* <input type="submit" value="Submit" /> */}

          <button>Submit</button>
</form>
    </div>
  )
}

export default App
