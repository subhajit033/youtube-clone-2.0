import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../storeSlices/appSlice";
import searchSlice from "../storeSlices/searchSlice";
import chatSlice from "../storeSlices/chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
