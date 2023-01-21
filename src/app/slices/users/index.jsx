import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Global } from '../../../helpers/Global'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        message: '',
        user: {}
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    }
});

export const { loginUser, setMessage } = userSlice.actions;
export default userSlice.reducer;

//get user
export const postUser = (login) => async (dispatch) => {
    await axios.post(Global.localhost + "user/login", login)
        .then((res) => {
            dispatch(setMessage(res.data?.message));
            if (res.data?.message === "success") {
                localStorage.setItem("token", res.data?.token);
                localStorage.setItem("user", JSON.stringify(res.data?.user));
            }
        })
        .catch()
}

export const getUser = () => async (dispatch) => {
    let token = localStorage.getItem('token');
    let { id } = JSON.parse(localStorage.getItem('user'));
    axios.get(Global.localhost + "user/getUser/" + id, {
        headers: {
            "Authorization": token
        }
    })
        .then(res => dispatch(loginUser(res.data?.user)))
}