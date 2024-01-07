import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPurchases = createAsyncThunk(
    'purchases/fetchPurchases',
    async () => {
        try {
            const res = axios.get(`${BASE_URL}/api/purchases`).then((res) => res.data)
            return res
         } catch (error) {
             console.log(error)
         }
    }
)

export const addPurchase = createAsyncThunk(
    'purchases/addPurchase',
    async () => {
        try {
            const res = axios.post(`${BASE_URL}/api/purchases`).then((res) => res.data)
            return res
         } catch (error) {
             console.log(error)
         }
    }
)

const initialState = {
    code: [],
    loading: true,
    error: null
}

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        editPurchase: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPurchases.pending, (state, action) => {

        })
        .addCase(fetchPurchases.fulfilled, (state, action) => {

        })
        .addCase(fetchPurchases.rejected, (state, action) => {

        })
    }
})

export const { editPurchase } = purchaseSlice.actions;
export default purchaseSlice.reducer;