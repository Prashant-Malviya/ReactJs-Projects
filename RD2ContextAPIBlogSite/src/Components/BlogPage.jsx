import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import BlogDetails from './BlogDetails';
import { baseUrl } from '../baseUrl';
import Header from './Header';

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [relatedblogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("url is : ")
        console.log(url)
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("Printing inside blogpage api"+data)
            setBlog(data.blog);
            setRelatedBlogs(data.relatedblogs);
        }catch(error){
            console.log("if error occured In blogId call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
      if(blogId){
        fetchRelatedBlogs();
      }
    },[location.pathname])

  return (
    <div className='py-[10px] mt-[10px]'>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {
       loading ?
       (
         <div>
            <p>Loading</p>
         </div>
       ) : blog ?
       (
        <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {
              relatedblogs.map( (post) =>{
                <div key={post.id}>
                    <BlogDetails post={post}/>
                </div>
              })
            }
        </div>
       ) : (
        <div>
          <p>No blog found</p>
        </div>
       )
      }
    </div>
  )
}

export default BlogPage
