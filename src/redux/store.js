import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
