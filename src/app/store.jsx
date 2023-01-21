import { configureStore } from '@reduxjs/toolkit'
//Slices
import users from './slices/users'
import isloading from './slices/loading'

export const store = configureStore({
    reducer: {
        users,
        isloading
    },
})