import { styled } from "styled-components";
import { flexCenterMixin } from "components/styled";

export const StyledModalContentContainer = styled.div`
  ${flexCenterMixin}
  flex-direction: column;

  gap: 20px;
`;

export const StyledLogoContainer = styled.div`
  width: 120px;
  height: 120px;

  @media ${({ theme }) => theme.media.medium} {
    width: 100px;
    height: 100px;
  }
  @media ${({ theme }) => theme.media.small} {
    width: 80px;
    height: 80px;
  }
`;
