import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    bannerUrl: "",
    subscriberCount: "",
  },
  reducers: {
    addUrl: (state, action) => {
      state.bannerUrl = action.payload;
    },
    removeUrl: (state) => {
      state.bannerUrl = "";
    },
    addSubscriber: (state, action) => {
      state.subscriberCount = action.payload;
    },
    removeSubscriber: (state) => {
      state.subscriberCount = "";
    },
  },
});
export const { addUrl, removeUrl, addSubscriber, removeSubscriber } = channelSlice.actions;
export default channelSlice.reducer;
