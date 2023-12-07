import React from 'react'
import './ItemDate.css'

function ItemDate({day,month,year}) {

    // const day = 1;
    // const month = "december";
    // const year = "2023";

  return (
        <div className='item'>
            <span>{day} </span>
            <span>{month} </span>
            <span>{year}</span>
        </div>
  )
}

export default ItemDate
