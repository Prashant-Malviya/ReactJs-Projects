import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// import process from 'process'


  // const API_KEY = import.meta.env.VITE_API_BASE_URL;


function Random() {

  // const [gif, setGif] = useState("");
  // const [loading,setLoading] = useState(false);

  // const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual Giphy API key
// const apiKey = 'SRzVAKdpXj5mTv56F2SzpdO8w674HBT3';

// Giphy API endpoint for fetching a random GIF
// const endpoint = 'https://api.giphy.com/v1/gifs/random';

// Parameters for the API request
// const queryParams = {
//   api_key: apiKey,
//   tag: 'funny', // Replace with your desired tag or leave it empty for a completely random GIF
// };

// Make the API request using axios
// let randomGifUrl;

// async function fetchData(){
//   setLoading(true);
// const response = await axios.get(endpoint, { params: queryParams })
// randomGifUrl = response.data.data.images.downsized_large.url;
// setGif(randomGifUrl);
// console.log(randomGifUrl)
//   .then(response => {
//     // Access the random GIF in the response
//     randomGifUrl = response.data.data.images.downsized_large.url;
// ;
//     // console.log(randomGifUrl)
//     // console.log(response);
//     // console.log(randomGifUrl)
//     setGif(randomGifUrl);
//   })
//   .catch(error => {
//     console.error(`Error: ${error.message}`);
//   });


// update setGif function to set value in gif
// setLoading(false);
// }
// useEffect(() => {
//   fetchData();
// }, []);

  

  // async function fetchData() {

  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const output = await axios.get(url);

  //   console.log(output)
  // }
  const{gif,loading,fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2  bg-yellow-200 rounded-lg border border-black margin flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

    {
      loading ? (<Spinner/>) : ( <img src={gif} alt="gif" width="450"/>)
    }
      
      <button
        onClick={clickHandler}
        className="mb-[20px] w-10/12 bg-gray-50 py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
