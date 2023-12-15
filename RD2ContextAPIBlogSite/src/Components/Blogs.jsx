import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  // consume
  const { loading, posts } = useContext(AppContext);
  console.log("printing inside blog component");
  console.log(posts);

  // Note: when using curly braces than u have to return from map function or else if u use round brackets then no need to write return for map function
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center h-screen">
      {
      loading ? (<Spinner />) :
      (
        posts.length === 0 ? (
          <div> 
          <p>No post found</p>
          </div>) : (posts.map((post)=>(
            <div key={post.id}>
              <p className="font-bold text-lg">{post.title}</p>
              <p className="text-sm">
                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
              </p>
              <p className="text-sm">Posted on {post.date}/</p>
              <p className="text-md mt-[14px]">{post.content}</p>

              <div className="flex gap-x-3 mt-[4px]">
                {post.tags.map((tag,index)=>{
                  return <span key={index} className="text-blue-500 underline font-bold text-xs">{`#${tag}`}</span>
                })}
              </div>

            </div>
          )))
      )

      }
    </div>
  );
}

export default Blogs;
