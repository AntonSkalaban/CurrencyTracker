import { configureStore } from "@reduxjs/toolkit";
import { CardModalSlice, SearchCurrencySlice, ThemeSlice } from "./slice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    cardModal: CardModalSlice,
    searchCurrency: SearchCurrencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
