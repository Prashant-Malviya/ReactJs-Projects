import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </div>
  )
}

export default App
