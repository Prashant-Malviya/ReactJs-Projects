import axios from "axios";
import React, { useEffect, useState } from "react";
// import Spinner from "./Spinner";

function useGif(taG) {
    // const [taG,setTag] = useState('');
    const [gif, setGif] = useState("");
    const [loading,setLoading] = useState(false);

  // const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual Giphy API key
const apiKey = 'SRzVAKdpXj5mTv56F2SzpdO8w674HBT3';

// Giphy API endpoint for fetching a random GIF
const endpoint = 'https://api.giphy.com/v1/gifs/random';

// Parameters for the API request
const queryParams = {
  api_key: apiKey,
  tag: taG !== ""?taG:'funny', // Replace with your desired tag or leave it empty for a completely random GIF
};

// Make the API request using axios
let randomGifUrl;

async function fetchData(){
  setLoading(true);
const response = await axios.get(endpoint, { params: queryParams })
randomGifUrl = response.data.data.images.downsized_large.url;
setGif(randomGifUrl);
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
setLoading(false);
}
useEffect(() => {
  fetchData();
}, []);

  

  // async function fetchData() {

  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const output = await axios.get(url);

  //   console.log(output)
  // }
  


  return {
    gif,loading,fetchData
  };
}

export default useGif
