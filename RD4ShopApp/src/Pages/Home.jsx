import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';


function Home() {
  
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  
  const apiUrl = "https://fakestoreapi.com/products"
  async function fetchProductData(){
      setLoading(true);

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log(data);
        console.log(apiUrl)
        setPosts(data);
      } catch (error) {
        console.log('erro occured!!!!!!!');
        setPosts([]);
      }
      setLoading(false)
    }

    useEffect( () => {
      fetchProductData();
    },[])

  return (
    <div>
     {
      loading ? <Spinner /> :
      posts.length > 0 ?
      (
        <div>
          {
            posts.map( (post) =>{
            <Product key={post.id} post={post} />
          })
          }
        </div>
      ):
      <div>
        <p>no data found</p>
      </div>
      
      }
    </div>
  )
}

export default Home
