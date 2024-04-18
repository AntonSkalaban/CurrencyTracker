import { styled } from "styled-components";

export const StyledSearchHintsContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 66px;
  z-index: 100;
  background: #1b2028;

  @media ${({ theme }) => theme.media.medium} {
    top: 35px;
  }
`;

export const StyledSearchHintsLi = styled.li`
  line-height: 40px;
  font-size: 18px;
  line-height: 27px;
  color: #9e9e9e;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;
