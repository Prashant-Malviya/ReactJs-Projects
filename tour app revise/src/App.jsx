import { useState } from 'react'
import './App.css'
import data from './Components/Data'
import Tours from './Components/Tours'

function App() {
  const [showData, setShowData] = useState(data)

  function removeTour(id){
    const newTour = showData.filter((tour)=>tour.id !== id)
    setShowData(newTour);
  }

  if(showData.length === 0){
    return (
      <div className="refresh">
        <h1>No tours left</h1>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> setShowData(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='app'>

    <Tours showData = {showData} removeTour = {removeTour} />

    </div>
  )
}

export default App
