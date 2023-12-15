import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'

function App() {
  
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);


  console.log("app rendering")
  
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
