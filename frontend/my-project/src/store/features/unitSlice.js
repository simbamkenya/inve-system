import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchUnits = createAsyncThunk(
    'supppliers/fetchSuppliers',
    async () => {
        
    })

const initialState = {
    'unit': 'kg'
}

export const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
        addUnit: (state, action) => {

        },
        editUnit: (state, action) => {

        },
        deleteUnit: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        // builder.addCase()
    }
})


export const { addUnit, editUnit, deleteUnit } = unitSlice.actions;
export default unitSlice.reducer;