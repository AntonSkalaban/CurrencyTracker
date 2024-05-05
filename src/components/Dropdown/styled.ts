import { styled } from "styled-components";

import { flexSpaceBetweenMixin, P } from "components/styled";
import Vector from "assets/svg/vector.svg";

export const StyledDropdownConainer = styled.div`
  min-width: 120px;
  width: fit-content;
  position: relative;

  user-select: none;

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;

export const StyledDropdownHeader = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 10px;

  ${flexSpaceBetweenMixin}
  gap: 20px;
`;

export const StyledDropdownVector = styled(Vector)`
  width: 16px;
  height: 16px;
  & path {
    fill: ${({ theme }) => theme.colors.fontMain};
  }
`;

export const StyledDropdownText = styled(P)`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;

  @media ${({ theme }) => theme.media.medium} {
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
  }
`;

export const StyledDropdownBody = styled.div`
  position: absolute;
  top: 40px;

  width: 100%;
  height: 340px;
  overflow: scroll;

  background-color: ${({ theme }) => theme.colors.bgMain};
`;

export const StyledOption = styled.li`
  width: 100%;
  height: 40px;

  padding-left: 10px;
  cursor: pointer;

  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.fontMain};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media ${({ theme }) => theme.media.medium} {
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
  }
`;

export const StyledInputRadio = styled.input`
  width: 100%;
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;

  font-weight: 300;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontSecondary};

  @media ${({ theme }) => theme.media.small} {
    display: block;
  }
`;
