import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchSuppliers = createAsyncThunk(
    'supppliers/fetchSuppliers',
    async () => {
        try {
          const res = axios.get(`${BASE_URL}/api/suppliers`).then(res => res.data)
          return res
        } catch (error){
            console.log(error)
        }
    }
)

export const addSupplier = createAsyncThunk(
    'supppliers/addSupplier',
    async (data) => {
        try {
          const res = axios.post(`${BASE_URL}/api/suppliers`).then(res => res.data)
          return res
        } catch (error){
            console.log(error)
        }
    }
)

export const deleteSupplierById = createAsyncThunk(
    'categories/deleteSupplierById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/suppliers/${id}`).then((res) => res.data)
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

export const supplierSlice = createSlice({
    name: 'supplier',
    initialState,
    reducers: {
        addSupplier: (state, action) => {

        },
        editSupplier: (state, action) => {

        },
        deleteSupplier: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSuppliers.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchSuppliers.fulfilled, (state, action) => {
            state.data = action.payload.suppliers
        })
        .addCase(fetchSuppliers.rejected, (state, action) => {
            state.loading = true
        })
    }

})

export const { editSupplier} = supplierSlice.actions;
export default supplierSlice.reducer;