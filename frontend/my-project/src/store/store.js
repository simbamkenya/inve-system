import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import supplierReducer from "./features/supplierSllice";
import unitReducer from "./features/UnitSlice";
import customerReducer from "./features/customerSlice";
import productReducer from "./features/productSlice";


export const store = configureStore({
    reducer: {
      categories: categoryReducer,
      units: unitReducer,
      suppliers: supplierReducer,
      customers: customerReducer,
      products: productReducer
    }
})