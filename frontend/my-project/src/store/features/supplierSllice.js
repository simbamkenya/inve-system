import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchSuppliers = createAsyncThunk(
    'supppliers/fetchSuppliers',
    async () => {

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