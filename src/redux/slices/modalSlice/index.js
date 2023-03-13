import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isActive: false,
  },
  reducers: {
    openModal: (state) => {
      state.isActive = true;
    },
    closeModal: (state) => {
      state.isActive = false;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
