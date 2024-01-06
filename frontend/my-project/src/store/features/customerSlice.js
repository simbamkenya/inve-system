import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchCustomers = createAsyncThunk(
    'customers/fetchCustomers',
    async () => {
        try {
          const res = axios.get(`${BASE_URL}/api/customers`).then(res => res.data)
          return res
        } catch (error){
            console.log(error)
        }
    }

)

const initialState = {
    data: [],
    error: '',
    loading: true
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
     builder.addCase(fetchCustomers.pending, (state, action) => {
        state.status = "loading"
     })
     .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "fulfilled"
        
     })
     .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "rejected"
     })
    }
})

export const { addCustomer, editCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;