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

const initialState = {
    supplier: 'kim supplier'
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
    }

})

export const { addSupplier, editSupplier, deleteSupplier} = supplierSlice.actions;
export default supplierSlice.reducer;