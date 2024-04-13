import { styled } from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 105px;
`;

export const StyledText = styled.h4`
  font-weight: 400;
  font-size: 38px;
  line-height: 57px;
  color: ${({ theme }) => theme.colors.fontMain};
`;
