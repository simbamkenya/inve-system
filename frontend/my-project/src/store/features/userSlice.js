import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";


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
    user: 'simba'
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