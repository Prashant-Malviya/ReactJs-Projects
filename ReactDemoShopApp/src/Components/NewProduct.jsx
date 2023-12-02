import React from 'react'
import './NewProduct.css'
import ProductForm from './ProductForm'


function NewProduct(props) {

    function saveProduct(product){
        console.log("i am inside new product");
        console.log(product)

        // calling parent function 
        props.DataValue(product)
    }

  return (
    <div>
      
      <ProductForm onSaveProduct = {saveProduct}/>

    </div>
  )
}

export default NewProduct
