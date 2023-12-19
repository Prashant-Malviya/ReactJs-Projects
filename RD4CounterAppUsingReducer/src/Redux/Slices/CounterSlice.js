import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value:0,
}

export  const CounterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers : {
            increament : (state) => {
                state.value += 1;
            },
            decrement : (state) =>{
                state.value -= 1;
            }
        }
    }
)

export const {increament,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;