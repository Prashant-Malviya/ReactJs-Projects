import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { FadeLoader } from 'react-spinners';


function Home() {
    const api_url = "https:fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try {
            const res = await fetch(api_url);
            const data = await res.json();
            console.log(data)
            setPosts(data)

        } catch (error) {
            console.log("Error Occurred!!!!!1")
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])


  return (
    <div>
     { loading ? (<FadeLoader color="#36d7b7" />) :( posts.length > 0 ? 
     ( 
    <div>{
     posts.map((post) =>(
        <Product key={post.id} post={post} />
     ))
    }</div>
       ) : (<div>
        <p>No data found</p>
      </div>))}
    </div>
  )
}

export default Home
