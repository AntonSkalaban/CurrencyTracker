import { createGlobalStyle } from "styled-components";

export const GeneralStyles = createGlobalStyle`
body {
    font-family: "Poppins";
    font-style: normal;
    background-color: ${({ theme }) => theme.colors.bgMain};
  }`;
