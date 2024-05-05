import { styled } from "styled-components";

import { flexCenterMixin } from "components/styled";

export const StyledSearchContainer = styled.div`
  ${flexCenterMixin}
  flex-direction: column;
  gap: 24px;
  margin-top: 105px;

  @media ${({ theme }) => theme.media.medium} {
    margin-top: 40px;
    gap: 10px;
  }
`;

export const StyledText = styled.h4`
  font-weight: 400;
  font-size: 38px;
  line-height: 57px;
  color: ${({ theme }) => theme.colors.fontMain};
`;
