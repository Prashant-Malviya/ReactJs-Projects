import React, { useState } from 'react'
import Card from './Card';


function Cards({courses,category}) {

    const [likedCourses,setLikedCourses] = useState([]);

    
    // returns you a list of all courses received from the api response
    const getCourses = () =>{
      if(category === "All")
        {
          let allCourses = [];
          Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
        }
        else{
            // only specific category data/array will be shown
          return courses[category];
        }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
      getCourses().map((course) => {
        return (<Card course = {course} key={course.id} likedCourses={likedCourses} setLikedCourses = {setLikedCourses} />)
      })
    }
    </div>
  )
}

export default Cards
