import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: string } = {
  value: "",
};

export const SearchCurrencySlice = createSlice({
  name: "searchCurrency",
  initialState,
  reducers: {
    setCurrencyValue: (state, { payload }: { payload: string }) => {
      state.value = payload;
    },
  },
  selectors: {
    getCurrencyValue: (state) => state.value,
  },
});

export const { setCurrencyValue } = SearchCurrencySlice.actions;
export const { getCurrencyValue } = SearchCurrencySlice.selectors;

export default SearchCurrencySlice.reducer;
