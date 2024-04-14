import { styled } from "styled-components";
import { ThemeEnum } from "types";
import SearchIcon from "assets/svg/search.svg";

export const ElasticSearchContainer = styled.div`
  width: 450px;
  height: 66px;
  border-radius: 8px;
  position: relative;

  @media ${({ theme }) => theme.media.medium} {
    width: 400px;
    height: 45px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    width: 300px;
    height: 35px;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 8px;
  background: ${({ theme: { type, colors } }) =>
    type === ThemeEnum.dark ? "#1b2028" : colors.lightGrey};
  padding-left: 20px;
  outline: none;

  font-size: 18px;
  line-height: 27px;
  color: ${({ theme: { type, colors } }) =>
    type === ThemeEnum.dark ? "#9e9e9e;" : colors.fontMain};
`;

export const StyledSearchButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  top: calc(50% - 14px);
  background: transparent;
  cursor: pointer;
`;
export const StyledSearchIcon = styled(SearchIcon)`
  width: 100%;
  height: 100%;

  & path {
    fill: ${({ theme: { type, colors } }) =>
      type === ThemeEnum.dark ? "#9e9e9e;" : colors.fontMain};
  }
`;
