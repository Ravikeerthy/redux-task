import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";

// Configuring the Redux store with the blogReducer
export const productStore = configureStore({
    reducer:{
        storedDate : productReducer //// Assigning the blogReducer to the 'blogs' slice of the Redux store
    }
})