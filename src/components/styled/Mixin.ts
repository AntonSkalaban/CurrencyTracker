import { css } from "styled-components";

export const flexMixin = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const greenGradientText = css`
  background: linear-gradient(${({ theme }) => theme.colors.ligthGreen});
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
