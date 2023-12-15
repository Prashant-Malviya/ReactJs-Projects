import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    FirstName : "",
    LastName : "",
    Email : "",
    Country : "",
    StreetAddress : "",
    City : "",
    State : "",
    PostalCode : "",
    Gender : "",
    Acknowledgement: false
  })

  function changeHandler(event){
    // console.log(event.target.value);
    const {name,value,type,checked} = event.target
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        // [event.target.name] : event.target.type == "checkbox" ? checked :  event.target.value
        
        [name] : type === "checkbox" ? checked : value
      }
    })
  }
  
  // console.log()

  function submitHandler(event){
    event.preventDefault();

    console.log("Final Form Data : ")

    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

      <label htmlFor="FirstName">Enter Your First Name:  </label> 
      <input 
      type="text"
      placeholder='First Name'
      onChange={changeHandler}
      name='FirstName'
      value={formData.FirstName}
      id='FirstName'

       /> 
       <br /> <br />
      <label htmlFor="LastName">Enter Your Last Name: </label>
      <input 
      type="text"
      placeholder='Last Name'
      onChange={changeHandler}
      name = "LastName"
      value={formData.LastName}
      id='LastName'
       />

        <br /><br />

        <label htmlFor="Email">Enter Your Email: </label>
        <input 
        type="email" 
        placeholder='@email'
        onChange={changeHandler}
        name='Email'
        value={formData.value}
        id = 'Email'
        />

        <br /><br />

        <label htmlFor="Country">Enter Your Country Name: </label>
        <select 
        name="Country" 
        id="Country"
        onChange={changeHandler}
        value={formData.value}
        >
          <option value="Select">Select</option>
          <option value="Bharat">Bharat</option>
          <option value="America">America</option>
          <option value="Russia">Russia</option>
          <option value="Nepal">Nepal</option>
        </select>

        <br /><br />

        <label htmlFor="StreetAddress">Enter Your Street Address: </label>
        <input 
        type="text"
        placeholder='Street Address'
        onChange={changeHandler}
        name='StreetAddress'
        value={formData.value}
        id='StreetAddress'
         />

         <br /><br />

         <label htmlFor="City">Enter Your City : </label>
         <input 
          type='text'
          placeholder='City'
          onChange={changeHandler}
          name='City'
          value={formData.value}
          id='City'
         />
         <br /><br />

         <label htmlFor="State">Enter Your State : </label>
         <input 
          type='text'
          placeholder='State'
          onChange={changeHandler}
          name='State'
          value={formData.value}
          id='State'
         />

         <br /> <br />

         <label htmlFor="PostalCode">Enter Your Postal Code : </label>
         <input 
          type='number'
          placeholder='Postal Code'
          onChange={changeHandler}
          name='PostalCode'
          value={formData.value}
          id='PostalCode'
         />

         <br /><br />

         <label>Gender: </label>
         <input 
         type="radio"
         onChange={changeHandler}
         name='Gender'
         value="Male"
         checked = {formData.Gender === "Male"}
         id='Male'
          />
        <label htmlFor="Male">Male</label>
         <input 
         type="radio"
         onChange={changeHandler}
         name='Gender'
         value="Female"
         checked = {formData.Gender === "Female"}
         id='Female'
          />
        <label htmlFor="Female">Female</label>

         <input 
         type="radio"
         onChange={changeHandler}
         name='Gender'
         value="Other"
         checked = {formData.Gender === "Other"}
         id='Other'
          />
        <label htmlFor="Other">Other</label>

        <br /><br />

        <input 
        type="checkbox"
        onChange={changeHandler}
        name='Acknowledgement'
        checked = {formData.Acknowledgement}
        id='acknowledgement'
         />
        <label htmlFor="acknowledgement"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus blanditiis aut hic laudantium delectus illum porro omnis totam debitis cumque, quam beatae! Aspernatur fugit laboriosam libero quas adipisci saepe perferendis illum quae atque officiis, sapiente ea, tenetur ex! Necessitatibus velit sint nulla tenetur voluptatem!</label>
        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
