import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT } from "./constant";
const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVECHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
