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
    }, 
    openMenu: (state)=>{
      state.isMenuopen = true;
    }
  },
});
export const {toggleMenu, closeMenu, openMenu} = appSlice.actions;
export default appSlice.reducer;
