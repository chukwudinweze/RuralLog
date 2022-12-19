import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    toggleMobileNav(state) {
      state.isActive = !state.isActive;
    },
  },
});
const store = configureStore({
  reducer: { mobileNavActive: mobileNavSlice.reducer },
});
export const { toggleMobileNav } = mobileNavSlice.actions;

export default store;
