import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'


function Navbar({isLoggedIn,setIsLoggedIn}) {



  return (
    <div className='flex justify-evenly'>
     
     <Link to="/">
        <h1 className='text-4xl font-bold p-5'>groUp</h1>
     </Link>

     <nav>
        <ul className='flex gap-3 p-5 m-3'>
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

     <div className='flex ml-5 mr-3 gap-3 p-5 m-3'>
        {
            !isLoggedIn &&
            <Link to="/login" >
                <button>
                    Login
                </button>
            </Link>
        }
        {
            !isLoggedIn &&
            <Link to="/signup" >
                <button>
                    SignUp
                </button>
            </Link>
        }
        {
            isLoggedIn &&
            <Link to="/" >
                <button onClick={()=>{
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
                <button>
                    Dashboard
                </button>
            </Link>
        }
     </div>

    </div>
  )
}

export default Navbar
