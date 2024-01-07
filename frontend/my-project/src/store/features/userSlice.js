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
export const deleteUserById = createAsyncThunk(
    'users/deleteUsertById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/users/${id}`).then((res) => res.data)
           return id
        } catch (error) {
            console.log(error)
        }
    }

)

export const register = createAsyncThunk(
    "users/register",
    async () => {
        const res = axios.post(`${BASE_URL}/api/users/register`).then((res) => res.data)
        return res
    }
)

export const login = createAsyncThunk(
    "users/login",
    async () => {
        const res = axios.delete(`${BASE_URL}/api/users/login`).then((res) => res.data)
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
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {

        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = true
        })
    }
})


export const { addUser } = userSlice.actions;
export default userSlice.reducer;