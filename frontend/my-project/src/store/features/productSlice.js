import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
           const res = axios.get(`${BASE_URL}/products`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }

)

const initialState = {
    product: 'Doomsday'
}

export const productSlice = createSlice({
    name: 'product',
    initialState, 
    reducers: {
       addProduct: (state, action) => {

       },
       editProduct: (state, action) => {

       },
       deleteProduct: (state, action) => {

       }
    },
    extraReducers: (builder) => {
    //  builder.addCase()
    }
})

export const {addProduct, editProduct, deleteProduct} = productSlice.actions;
export default productSlice.reducer;