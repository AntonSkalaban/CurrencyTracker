import { createGlobalStyle } from "styled-components";
import PoppinsBold from "assets/fonts/Poppins/Poppins-Bold.ttf";
import PoppinsMedium from "assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsRegular from "assets/fonts/Poppins/Poppins-Regular.ttf";

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsMedium}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsBold}) format('truetype');
  font-weight: 700;
}

body {
    font-family: Poppins;
}
`;
