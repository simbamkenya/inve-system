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

const initialState = {
    data: [],
    error: '',
    loading: true
}
const categogrySlice = createSlice({
name: 'category',
initialState,
reducers: {
    addCategory: (state, action) => {
    },
    editCategory: (state, action) => {
    },
    deleteCategory: (state, action) => {
    }
}
})

export const { addCategory, editCategory, deleteCategory } = categogrySlice.actions;
export default categogrySlice.reducer;
