import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const productsreducer = createReducer(initialstate, {
  allproductsrequest: (state) => {
    state.loading = true;
  },
  allproductssuccess: (state, action) => {
    state.loading = false;
    state.products = action.payload;
  },
  allproductsfailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
