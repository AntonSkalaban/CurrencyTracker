import { DefaultTheme } from "styled-components";
import { Theme } from "types/themeType";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export const baseTheme: Theme = {
  colors: {
    ligthGreen: `rgba(0, 206, 44, 1), 
    rgba(174, 223, 35, 1),
    rgba(163, 220, 0, 1)`,
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(3, 3, 4, 1)",
    lightGrey: "rgba(217, 217, 217, 1)",
    grey: "rgba(32, 32, 37, 1)",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
  },
};
