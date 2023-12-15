import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  

  return (
   <div>
   <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

   <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element = {<Login  setIsLoggedIn = {setIsLoggedIn} />} />
      <Route path='/signup' element = {<SignUp setIsLoggedIn = {setIsLoggedIn} />} />
      <Route path='/dashboard' element = {<Dashboard />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />

   </Routes>
   </div>
  )
}

export default App
