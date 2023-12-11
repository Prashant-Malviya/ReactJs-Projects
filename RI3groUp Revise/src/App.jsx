import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col' >
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn} />} />

      <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />

      <Route path='/dashboard' element={<Dashboard />} />

      </Routes>

    </div>
  )
}

export default App
