import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token")
}

export const authSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setLogin: (state, action) => {
            return action.payload
        }
    }
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;