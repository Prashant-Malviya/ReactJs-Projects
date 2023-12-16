import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blogs() {
  // consume
  const { loading, posts } = useContext(AppContext);
  console.log("printing inside blog component");
  console.log(posts);

  // Note: when using curly braces than u have to return from map function or else if u use round brackets then no need to write return for map function
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
      {
      loading ? (<Spinner />) :
      (
        posts.length === 0 ? (
          <div> 
          <p>No post found</p>
          </div>) : (posts.map((post)=>(
            <BlogDetails key={post.id} post={post} />
          )))
      )

      }
    </div>
  );
}

export default Blogs;
