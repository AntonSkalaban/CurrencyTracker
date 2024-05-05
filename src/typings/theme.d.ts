import { DefaultColors, ThemeEnum } from "types";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
    colors: DefaultColors;
  }
}
