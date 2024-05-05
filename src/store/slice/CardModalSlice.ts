import { createSlice } from "@reduxjs/toolkit";

import { CardData } from "types/card";

const initialState: { isOpen: boolean; data: Omit<CardData, "img"> } = {
  isOpen: false,
  data: {} as CardData,
};

export const CardModalSlice = createSlice({
  name: "cardModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setModalData: (state, { payload }: { payload: Omit<CardData, "img"> }) => {
      state.data = payload;
    },
    resetModalData: (state) => {
      state.data = {} as CardData;
    },
  },
  selectors: {
    getModalStatus: (state) => state.isOpen,
    getModalData: (state) => state.data,
  },
});

export const { toggleModal, setModalData } = CardModalSlice.actions;
export const { getModalStatus, getModalData } = CardModalSlice.selectors;

export default CardModalSlice.reducer;
