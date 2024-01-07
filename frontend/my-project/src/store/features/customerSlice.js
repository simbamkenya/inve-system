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


export const deleteCustomerById = createAsyncThunk(
    'products/deleteCustomerById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/customers/${id}`).then((res) => res.data)
           return id
        } catch (error) {
            console.log(error)
        }
    }
)

export const addCustomer = createAsyncThunk(
    'customers/addCustomer',
    async (data) => {
        try {
           const res = axios.post(`${BASE_URL}/api/customers`).then((res) => res.data)
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

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        editCustomer: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchCustomers.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.customers
        
     })
     .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editCustomer } = customerSlice.actions;
export default customerSlice.reducer;