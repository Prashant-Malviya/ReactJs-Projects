import React, { useState } from 'react'
import Card from './Card';

function Cards({cardInfo,category}) {

    const [likedTutorial,setLikedTutorial] = useState([]);
    
    const getCardInfo = ()=>{
        if(category === "All"){
            let tutorial = [];
            Object.values(cardInfo).forEach((tutorialCategory) => {
                tutorialCategory.forEach((tutDescription) => {
                    tutorial.push(tutDescription);
                })
               })
               return tutorial;
        }
        else{
            return cardInfo[category];
        }
       
    }
        
        // console.log(tutorial);
      
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      
      {
        getCardInfo().map((tutInfo)=>{
            return(
                <Card tutInfo = {tutInfo} likedTutorial = {likedTutorial} setLikedTutorial = {setLikedTutorial} />
            )
        })
      }
      
    </div>
  )
}

export default Cards
