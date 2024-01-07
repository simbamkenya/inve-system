import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async () => {
        try {
            const res = axios.get(`${BASE_URL}/api/orders`).then(res => res.data)
            return res
          } catch (error){
              console.log(error)
          }
    },

)
export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (data) => {
        try {
            const res = axios.get(`${BASE_URL}/api/orders`).then(res => res.data)
            return res
          } catch (error){
              console.log(error)
          }
    },

)

const initialState ={
    data: '',
    loading: true,
    error: null
}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        editOrder: (state, action )=> {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {

        })
        .addCase(fetchOrders.fulfilled, (state, action) => {

        })
        .addCase(fetchOrders.rejected, (state, action) => {

        })
    }
})

export const { editOrder } = orderSlice.actions;
export default orderSlice.reducer;