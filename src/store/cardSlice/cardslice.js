import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productData: {},
  value: 0,
  addCart: [],
};

export const cardSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproductData: (state, action) => {
      state.productData = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addcartFunction: (state, action) => {
        console.log(action);
    //   state.addCart.push(action.payload);
    },
  },
});

export const { setproductData, increment, decrement,addcartFunction } = cardSlice.actions;
export default cardSlice.reducer;
