import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuopen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuopen = !state.isMenuopen;
    },
    closeMenu: (state)=>{
      state.isMenuopen = false;
    }
  },
});
export const {toggleMenu, closeMenu} = appSlice.actions;
export default appSlice.reducer;
