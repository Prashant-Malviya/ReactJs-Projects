import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

function Card({course,likedCourses,setLikedCourses}) {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
          // if already liked than remove it from the arr : remove from like
            setLikedCourses((prev) => prev.filter( (courseId) => (courseId !== course.id) ) );
            toast.warning("like removed");

        }else{
          // if not liked already then add it : add in like
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
              // if none empty then add prev and new as well 
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("liked successfully");
        }
    }

  return (
    <div className='w-[300px] bg-purple-300	 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                  !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.80rem" />) : (<FcLike fontSize="1.80rem" />)
                }
            </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-black font-semibold text-lg leading-6'>
            {course.title}
        </p>
        <p className='mt-2 text-black'>
            {
              course.description.length > 100 ? (course.description.substr(0,100)) + "...." : (course.description)
            }
        </p>
      </div>

    </div>
  )
}

export default Card
