import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
           const res = axios.get(`${BASE_URL}/api/products`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }

)


export const deleteProductById = createAsyncThunk(
    'products/deleteProductById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/products/${id}`).then((res) => res.data)
           return id
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

export const productSlice = createSlice({
    name: 'product',
    initialState, 
    reducers: {
       addProduct: (state, action) => {

       },
       editProduct: (state, action) => {

       },
    },
    extraReducers: (builder) => {
     builder.addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchProducts.fulfilled, (state, action) => {
       state.loading = false
       state.data = action.payload.products
     })
     .addCase(fetchProducts.rejected, (state, action) =>  {
       state.loading = false
     })
     
     builder.addCase(deleteProductById.pending, (state, action) => {
        state.loading = true;
     })
     .addCase(deleteProductById.fulfilled, (state, action) => {
        console.log('payload id', current(state.data))   
        console.log('ppp', action.payload)
        const currentState = current(state.data)
        // state.data = state.data.filter(product => +product.id !== action.payload.id)
        state.loading = false;
        state.error  =  null;
        
     })
     .addCase(deleteProductById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.msg;
     })
    }
})

export const {addProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;