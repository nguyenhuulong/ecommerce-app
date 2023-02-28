import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      console.log(document.getElementsByClassName("header")[0]);
      state.value = action.payload;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "8px";
      document.getElementsByClassName("header")[0].style.paddingRight = "8px";
      document.getElementsByClassName("header__logo")[0].style.paddingRight = "8px";
    },
    remove: (state) => {
      state.value = null;

      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
      document.getElementsByClassName("header")[0].style.paddingRight = "0px";
      document.getElementsByClassName("header__logo")[0].style.paddingRight = "0px";
    },
  },
});

export const { set, remove } = productModalSlice.actions;

export default productModalSlice.reducer;
