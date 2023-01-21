import { configureStore } from '@reduxjs/toolkit'
//Slices
import users from './slices/users'

export const store = configureStore({
    reducer: {
        users,
    },
})