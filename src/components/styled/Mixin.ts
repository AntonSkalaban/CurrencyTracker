import { css } from "styled-components";

export const flexSpaceBetweenMixin = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexCenterMixin = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const greenGradientText = css`
  background: linear-gradient(${({ theme }) => theme.colors.ligthGreen});
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const textSecondary = css`
  font-style: normal;
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;

  color: #898989;
`;
