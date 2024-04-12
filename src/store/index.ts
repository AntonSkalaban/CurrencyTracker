import { configureStore } from "@reduxjs/toolkit";
import { CardModalSlice, SearchCurrencySlice } from "./slice";

export const store = configureStore({
  reducer: {
    cardModal: CardModalSlice,
    searchCurrency: SearchCurrencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
