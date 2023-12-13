import { useContext, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
// import { AppContext } from './Context/AppContext'

function App() {
  // const [count, setCount] = useContext(AppContext)

  console.log("app rendering")
  
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
