import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
     try{
       const res = await axios.get(`${BASE_URL}/api/users`).then((res) => res.data)
       return res
     } catch (error) {
        console.log(error)
     }
    }
)

export const register = createAsyncThunk(
    "users/register",
    async () => {

    }
)

export const login = createAsyncThunk(
    "users/login",
    async () => {

    }
)

const initialState = {
    data: [],
    error: '',
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase()
    }
})


export const { addUser } = userSlice.actions;
export default userSlice.reducer;