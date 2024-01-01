import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category : 'books'
}
const categogrySlice = createSlice({
name: 'category',
initialState,
reducers: {
    addCategory: (state, action) => {
    }
}
})

export const { addCategory } = categogrySlice.actions;
export default categogrySlice.reducer;
