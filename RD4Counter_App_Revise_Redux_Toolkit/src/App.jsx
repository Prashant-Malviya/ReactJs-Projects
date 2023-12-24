import { useState } from 'react'
import './App.css'
import { increment } from './Redux/Slices/CounterSlice'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App Through Redux Toolkit</h1>
      <Counter />
    </div>
  )
}

export default App
