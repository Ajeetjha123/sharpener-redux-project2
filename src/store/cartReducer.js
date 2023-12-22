import { createSlice } from "@reduxjs/toolkit";

const initialButtonState = {
  isButtonVisible: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialButtonState,
  reducers: {
    visible(state) {
      state.isButtonVisible = true;
    },
  },
});
export const buttonActions = cartSlice.actions;
export default cartSlice.reducer;
