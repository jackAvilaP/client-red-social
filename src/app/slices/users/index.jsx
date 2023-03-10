import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Global } from "../../../helpers/Global";
import { setIsLoading } from "../loading";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    message: "",
    user: {},
    listUsers: [],
    counters: {},
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
      state.counters = action.payload;
      state.message = action.payload;
    },
    listUsers: (state, action) => {
      state.listUsers = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setCounter: (state, action) => {
      state.counters = action.payload;
    },
  },
});

export const { loginUser, setMessage, listUsers, setCounter, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;

export const prueba = () => async (dispatch) => {
  dispatch(setMessage("desde prueba"));
};

//get user
export const postUser = (login) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    try {
      await axios.post(Global.localhost + "user/login", login).then((res) => {
        dispatch(setMessage(res.data?.message));
        if (res.data?.message === "success") {
          localStorage.setItem("token", res.data?.token);
          localStorage.setItem("user", JSON.stringify(res.data?.user));
        }
      });
    } catch (error) {
      if (
        error.response.status === 401 ||
        error.response.status === 404 ||
        error.response.status === 400
      ) {
        alert(error.response.data.message);
      }
    }
  } finally {
    return dispatch(setIsLoading(false));
  }
};

export const getUser = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  let { id } = JSON.parse(localStorage.getItem("user"));

  try {
    try {
      axios
        .get(Global.localhost + "user/getUser/" + id, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => dispatch(loginUser(res.data?.user)));
    } catch (error) {
      console.log(error);
    }
  } finally {
  }
};

export const getListUser = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  try {
    axios
      .get(Global.localhost + "user/list?limit=4&page=3", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data)
        dispatch(listUsers(res.data.user?.docs));
      });
  } catch (error) {
    console.log(error);
  }
};

export const saveUser = (newUser) => async (dispatch) => {
  let counterObj = Object.entries(newUser).length;
  if (counterObj === 0 || counterObj < 4) {
    return dispatch(setMessage("not saved"));
  }

  try {
    try {
      await axios
        .post(Global.localhost + "user/register", newUser)
        .then((res) => dispatch(setMessage(res.data?.message)));
    } catch (error) {
      if (
        error.response.status === 401 ||
        error.response.status === 404 ||
        error.response.status === 400
      ) {
        alert(error.response.data.message);
      }
    }
  } finally {
  }
};

//Upload images perfil user
export const uploadFile = (newFile) => async (dispatch) => {
  let token = localStorage.getItem("token");
  try {
    await axios
      .post(Global.localhost + "user/upload", newFile, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        delete res.data.user.password;
        dispatch(loginUser(res.data?.user));
        localStorage.setItem("user", JSON.stringify(res.data?.user));
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (newData) => async (dispatch) => {
  let token = localStorage.getItem("token");
  try {
    try {
      await axios
        .put(Global.localhost + "user/update", newData, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(setMessage(res.data.status));
          dispatch(loginUser(res.data.user));
        });
    } catch (error) {
      if (
        error.response.status === 401 ||
        error.response.status === 404 ||
        error.response.status === 400
      ) {
        alert(error.response.data.message);
      }
    }
  } finally {
  }
};

export const getCounter = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  let { id } = JSON.parse(localStorage.getItem("user"));
  try {
    try {
      axios
        .get(Global.localhost + "user/count/" + id, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => dispatch(setCounter(res.data)));
    } catch (error) {}
  } finally {
  }
};
