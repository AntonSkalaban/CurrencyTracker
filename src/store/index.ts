import { configureStore } from "@reduxjs/toolkit";
import { CardModalSlice } from "./slice";

export const store = configureStore({
  reducer: {
    cardModal: CardModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
