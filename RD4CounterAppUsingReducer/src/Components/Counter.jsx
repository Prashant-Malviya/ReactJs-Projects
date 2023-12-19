import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament } from '../Redux/Slices/CounterSlice';

function Counter() {

    // to access the slice functioinality we use useSelector()
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={increament}>
        Increment
      </button>
      <br /><br />
      <div>{count}</div>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
