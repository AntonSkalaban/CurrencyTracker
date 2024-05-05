import { createGlobalStyle } from "styled-components";

import PoppinsMedium from "assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsRegular from "assets/fonts/Poppins/Poppins-Regular.ttf";

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsMedium}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsMedium}) format('truetype');
  font-weight: 600;
}
`;
