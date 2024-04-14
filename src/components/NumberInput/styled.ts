import { styled } from "styled-components";
import { ThemeEnum } from "types/defaultTheme";

export const StyledNumberInput = styled.input`
  height: 40px;
  width: 60px;

  border: none;
  border-bottom: 1px solid
    ${({ theme: { type, colors } }) => (type === ThemeEnum.dark ? colors.lightGrey : colors.grey)};
  outline: none;
  background: transparent;

  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.fontMain};

  @media ${({ theme }) => theme.media.medium} {
    height: 26px;
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
  }

  @media ${({ theme }) => theme.media.small} {
    height: 20px;

    font-size: 18px;
    line-height: 20px;
  }
`;
