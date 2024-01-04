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
    <div className='flex'>
     { loading ? (<FadeLoader color="#36d7b7" className='flex justify-center items-center m-auto'/>) :( posts.length > 0 ? 
     ( 
    <div className='grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>{
     posts.map((post) =>(
        <Product key={post.id} post={post} />
     ))
    }</div>
       ) : (<div className='flex justify-center items-center'>
        <p>No data found</p>
      </div>))}
    </div>
  )
}

export default Home
