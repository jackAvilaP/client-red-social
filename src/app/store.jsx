import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/tests/counter'
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})