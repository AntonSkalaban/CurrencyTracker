import { styled } from "styled-components";
import { flexMixin } from "components/styled";

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

export const StyledDropdownText = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;

  color: #ffffff;
`;
export const StyledDropdownBody = styled.div`
  width: 100%;
  height: 340px;
  overflow: scroll;
  position: absolute;
  top: 40px;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledOption = styled.li`
  width: 100%;
  height: 40px;

  padding-left: 10px;
  cursor: pointer;

  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.lightGrey};

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
