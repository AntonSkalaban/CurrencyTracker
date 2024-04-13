import { styled } from "styled-components";
import { flexMixin, StyledP } from "components/styled";
import Vector from "assets/svg/vector.svg";

export const StyledDropdownConainer = styled.div`
  min-width: 120px;
  width: fit-content;
  position: relative;

  user-select: none;
`;

export const StyledDropdownHeader = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 10px;

  ${flexMixin}
  gap: 20px;
`;

export const StyledDropdownVector = styled(Vector)`
  width: 16px;
  height: 16px;
  & path {
    fill: ${({ theme }) => theme.colors.fontMain};
  }
`;

export const StyledDropdownText = styled(StyledP)`
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
`;

export const StyledDropdownBody = styled.div`
  width: 100%;
  height: 340px;
  overflow: scroll;
  position: absolute;
  top: 40px;

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
