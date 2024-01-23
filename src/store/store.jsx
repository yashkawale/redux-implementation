import { configureStore } from "@reduxjs/toolkit";
import arraySliceReducer from "../features/arraySlice";

const store = configureStore({
  reducer: arraySliceReducer,
});

export default store;
