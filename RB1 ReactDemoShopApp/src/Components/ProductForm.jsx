import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  // handling multiple states

  //   const [fullProductInput, setFullProductInput] = useState({
  //     title: "",
  //     date: "",
  //   });
  //   let obj;

  //   function titleChangeHandler(event, prevState) {
  //     obj = { ...prevState, title: event.target.value };

  //     setFullProductInput(obj);
  //   }
  //   function dateChangeHandler(event, prevState) {
  //     obj = { ...prevState, date: event.target.value };
  //     setFullProductInput(obj);
  //   }

  //   console.log({obj});

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    // console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const productData = {
        title : title,
        date : date
    }

    console.log("priting title and date");
    // console.log(productData);

    props.onSaveProduct(productData);

    setTitle("");
    setDate("");

    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="labelInputDiv">
        <label>Title</label>
        <input 
        type="text" 
        onChange={titleChangeHandler}
        value={title}
         />
      </div>

      <div className="labelInputDiv">
        <label>Date</label>
        <input
          type="date"
          min="2023-02-01"
          max="2023-12-12"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>

      <div>
        <button className="labelInputDiv" type="submit">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
