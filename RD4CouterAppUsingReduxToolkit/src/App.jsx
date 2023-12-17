import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
