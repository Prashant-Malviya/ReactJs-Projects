import React, { useContext, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function BlogPage() {

    const [blog,setBlog] = useState(null);
    const [relatedblogs,setRelatedBlogs] = useState([]);
    const loacation = useLocation();
    const navigation = useNavigation();
    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("Printin inside blogpage api"+data)
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }catch(error){
            console.log("In blogId call if error occured");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

  return (
    <div>
      
    </div>
  )
}

export default BlogPage
