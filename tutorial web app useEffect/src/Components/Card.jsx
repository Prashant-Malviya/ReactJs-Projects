import React from 'react'
import {FcLike} from "react-icons/fc"
import { toast } from 'react-toastify';

function Card({course,likedCourses,setLikedCourses}) {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter(((cid)=> cid !== course.id)));
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id])
            }else{
                setLikedCourses((prev) => [...prev,course.id])
            }
        }
    }
    toast.success("liked successfully");

  return (
    <div className='w-[300px] bg-purple-300	 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
            <button onClick={clickHandler}>
                <FcLike fontSize="1.80rem" />
            </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-black font-semibold text-lg leading-6'>
            {course.title}
        </p>
        <p className='mt-2 text-black'>
            {course.description}
        </p>
      </div>

    </div>
  )
}

export default Card
