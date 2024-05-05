export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface Colors {
  ligthGreen: string;
  lightGrey: string;
  black: string;
  white: string;
  grey: string;
}

export interface Media {
  large: string;
  medium: string;
  small: string;
  extraSmall: string;
}

export interface Theme {
  colors: Colors;
  media: Media;
}
