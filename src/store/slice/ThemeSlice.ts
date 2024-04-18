import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "constants/index";
import { ThemeEnum } from "types";

const initialState: { theme: DefaultTheme } = {
  theme: localStorage.getItem("themeType") === ThemeEnum.dark ? darkTheme : lightTheme,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    getTheme: (state) => state.theme,
    getThemeType: (state) => state.theme.type,
  },
});

export const { setTheme } = ThemeSlice.actions;
export const { getTheme, getThemeType } = ThemeSlice.selectors;

export default ThemeSlice.reducer;
