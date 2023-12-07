import React from 'react'
import Card from './Card'

function Tours({showData, removeTour}) {
    // console.log(showData)
  return (
    <div className='container'>
    <div>
        <h1 className='title'>Plan With Prashant</h1>
    </div>

    <div className="cards">
      {  showData.map((showData)=>{
           return <Card {...showData} removeTour={removeTour} key={showData.id} />
        })}
    </div>
      
    </div>
  )
}

export default Tours
