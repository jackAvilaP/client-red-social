import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        increment: (state, action) => {
            state.value++;
        },

        decrement: (state, action) => {
            state.value -= 1
        },

        reset: (state, action) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;


export default counterSlice.reducer;