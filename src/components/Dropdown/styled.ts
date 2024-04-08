import { styled } from "styled-components";

export const StyledDropdownConainer = styled.div`
  position: relative;
`;

export const StyledDropdownHeader = styled.div`
  width: 120px;
  height: 40px;
  padding: 0 10px;

  /* display: flex;
  border-radius: 8px;
  border: 1px solid rgba(71, 71, 71, 1); */
`;

export const StyledDropdownBody = styled.div`
  width: 100%;
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
