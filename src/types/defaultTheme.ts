import { Theme } from "./themeType";
import { Colors } from "./themeType";

import "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

// export interface DefaultColors extends Colors {
//   bg: string;
//   font: string;
//   border: string;
// }

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
    colors: Colors;
  }
}
