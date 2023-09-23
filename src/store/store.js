import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./cardSlice/cardslice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
