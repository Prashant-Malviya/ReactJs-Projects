import { useState } from 'react'
import Data from './Components/Data'
import './App.css'
import Tours from './Components/Tours';

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h1>No Tours Left</h1>
        <button className='btn-white' onClick={() => setTours(Data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
   <div className='app'>
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  )
}

export default App
