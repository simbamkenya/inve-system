import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchCustomers = createAsyncThunk(
    'customers/fetchCustomers',
    async () => {
        try {
          const res = axios.get(`${BASE_URL}/customers`).then(res => res.data)
          return res
        } catch (error){
            console.log(error)
        }
    }

)

const initialState = {
    customer: 'customer1'
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {

        },
        deleteCustomer: (state, action) => {

        },
        editCustomer: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        // builder.addCase()
    }
})

export const { addCustomer, editCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;