import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import supplierReducer from "./features/supplierSllice";
import unitReducer from "./features/UnitSlice";
import customerReducer from "./features/customerSlice";
import productReducer from "./features/productSlice";


export const store = configureStore({
    reducer: {
      category: categoryReducer,
      unit: unitReducer,
      supplier: supplierReducer,
      customer: customerReducer,
      product: productReducer
    }
})