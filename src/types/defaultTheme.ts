import { Colors } from "./theme";

import "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface DefaultColors extends Colors {
  bgMain: string;
  bgSecondary: string;
  fontMain: string;
  fontSecondary: string;
}
