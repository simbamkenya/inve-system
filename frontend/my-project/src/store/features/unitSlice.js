import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchUnits = createAsyncThunk(
    'units/fetchUnits',
    async () => {
     try{
       const res = await axios.get(`${BASE_URL}/api/units`).then((res) =>  res.data)
       return res
     } catch (error) {
        console.log(error)
     }
    }
)

export const deleteUnitById = createAsyncThunk(
    'units/deleteUnitById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/units/${id}`).then((res) => res.data)
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
     builder.addCase(fetchUnits.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchUnits.fulfilled, (state, action) => {
        state.loading = false
        console.log('a', action)
        state.data = action.payload.units
        
     })
     .addCase(fetchUnits.rejected, (state, action)=> {
        state.loading = true
     })
    }
})


export const { addUnit, editUnit, deleteUnit } = unitSlice.actions;
export default unitSlice.reducer;