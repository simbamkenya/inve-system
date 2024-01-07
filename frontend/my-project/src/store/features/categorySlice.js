import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => {
     try{
       const res = await axios.get(`${BASE_URL}/api/categories`).then((res) => res.data)
       return res
     } catch (error) {
        console.log(error)
     }
    }
)

export const deleteCategoryById = createAsyncThunk(
    'categories/deleteCategoryById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/categories/${id}`).then((res) => res.data)
           return id
        } catch (error) {
            console.log(error)
        }
    }
)

export const addCategory = createAsyncThunk(
    'categories/addCategory',
    async (data) => {
        try {
           const res = axios.post(`${BASE_URL}/api/categories`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState = {
    data: [],
    error: '',
    loading: true
}
const categogrySlice = createSlice({
name: 'category',
initialState,
reducers: {
    editCategory: (state, action) => {
    },
},
extraReducers:(builder) => {
    builder.addCase(fetchCategories.pending, (state,action) => {
        state.loading = true
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.categories
    })
    .addCase(fetchCategories.rejected, (state, action) => {
         state.loading = true;
    })
}
})

export const { editCategory } = categogrySlice.actions;
export default categogrySlice.reducer;
