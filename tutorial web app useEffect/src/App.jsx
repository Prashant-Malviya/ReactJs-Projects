import './App.css'
import { useEffect, useState } from 'react'
import { apiUrl,filterData } from './data'
import Navbar from './Components/NavBar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { toast } from 'react-toastify'
import Spinner from './Components/Spinner'


function App() {

  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a varaible
        // console.log(data)
        setCourses(output.data);
      } catch (error) {
        toast.error("Something Went Wrong")
      }
      setLoading(false);
    }
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col bg-rose-200'>
    <div>
    <Navbar />
    </div>

    <div>
    <Filter 
    
    filterData = {filterData} 
    category={category} 
    setCategory={setCategory}/>
    </div>

    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
    {
      loading ? (<Spinner />) : (<Cards courses = {courses} category={category}/>)
    }
    </div>
    </div>
  )
}

export default App
