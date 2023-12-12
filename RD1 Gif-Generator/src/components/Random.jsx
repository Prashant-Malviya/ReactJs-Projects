import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import process from 'process'

const  API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

    const [gif,setGif] = useState('');
   
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
        const output = await axios.get(url);
        console.log(output)
    }
    useEffect( ()=>{
        fetchData();
    },[])

    function clickHandler(){

    }

  return (
    <div className='w-1/2 h-[450px] bg-yellow-200 rounded-lg border border-black margin flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
    <img src={gif} alt="gif" width="450" />
    <button onClick={clickHandler}
    className='w-10/12 bg-gray-50 py-2 rounded-lg font-bold'
    >Generate</button>
      
    </div>
  )
}

export default Random
