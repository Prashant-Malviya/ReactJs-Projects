import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'


function Navbar({isLoggedIn,setIsLoggedIn}) {



  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
     
     <Link to="/">
        <h1 className='text-4xl font-bold  text-white'>groUp</h1>
     </Link>

     <nav>
        <ul className='text-gray-100 flex gap-x-6 '>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
     </nav>

     {/* login - sign up - logOut - Dashboard */}

     <div className='flex ml-5 mr-3 gap-3 p-5 m-3 gap-x-4'>
        {
            !isLoggedIn &&
            <Link to="/login" >
                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                    Login
                </button>
            </Link>
        }
        {
            !isLoggedIn &&
            <Link to="/signup" >
                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                    Sign up
                </button>
            </Link>
        }
        {
            isLoggedIn &&
            <Link to="/" >
                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700' onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>
                    Log Out
                </button>
            </Link>
        }
        {
            isLoggedIn &&
            <Link to="/dashboard" >
                <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                    Dashboard
                </button>
            </Link>
        }
     </div>

    </div>
  )
}

export default Navbar
