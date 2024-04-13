import { styled } from "styled-components";
import { ThemeEnum } from "types/defaultTheme";

export const StyledNumberInput = styled.input`
  height: 40px;
  width: 100px;

  border: none;
  border-bottom: 1px solid
    ${({ theme: { type, colors } }) => (type === ThemeEnum.dark ? colors.lightGrey : colors.grey)};
  outline: none;
  background: transparent;

  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.fontMain};
`;
