import React from 'react';
import './App.css'
import Product from './Components/Product';
import NewProduct from './Components/NewProduct';

function App() {

  function printProductData(data){
    console.log("i am inside app.js");
    console.log(data)
  }

  return (
    <>
     <NewProduct DataValue = {printProductData}/> 
    <Product />

    </>
  )
}

export default App
