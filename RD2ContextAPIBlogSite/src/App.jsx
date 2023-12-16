import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './Components/Home'
import BlogPage from './Components/BlogPage'
import TagPage from './Components/TagPage'
import CategoryPage from './Components/CategoryPage'

function App() {
  
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const loacation = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      // iska mtlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);


  console.log("app rendering")
  
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
   </Routes>
  )
}

export default App
