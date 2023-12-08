import { useState } from 'react'
import './App.css'
import { Link, NavLink, Route, Routes } from "react-router-dom"; 
import Support from './Components/Support';
import Home from './Components/Home';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import MainHeader from './Components/MainHeader';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    
   <div className="app">

   <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/support">Support</NavLink>
      </li>
      <li>
      <NavLink to="/about">About</NavLink>
      </li>
      <li>
      <NavLink to="/labs">Labs</NavLink>
      </li>
    </ul>
   </nav>


    <Routes>

      <Route path="/" element={<MainHeader />}>
      {/* index is our default route  */}
      <Route index element={<Home />} />
      
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={<Labs />} />
      <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>

   </div>
  )
}

export default App
