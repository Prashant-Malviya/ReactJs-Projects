import React from 'react'
import Card from './Card';

function Cards({courses}) {

    const [likedCourses,setLikedCourses] = ([]);

    let allCourses = [];
    // returns you a list of all courses received from the api response
    const getCourses = () =>{
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
      getCourses().map((course,id) => {
        return (<Card course = {course} key={id} likedCourses={likedCourses} setLikedCourses = {setLikedCourses} />)
      })
    }
    </div>
  )
}

export default Cards
