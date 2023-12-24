import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export  const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment: (state) => {//reducer function
            state.value  += 1;
        },
    decrement : (state) =>{//reducer function
            state.value -= 1;
    }
    }

})


export const {increment,decrement} = CounterSlice.actions // if we wanted to use the functionality of increment and decrement then we can access through this CounterSlice.actions , known as action creator
export default CounterSlice.reducer;