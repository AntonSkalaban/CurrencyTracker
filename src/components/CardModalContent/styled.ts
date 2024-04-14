import { styled } from "styled-components";

export const StyledModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ConverString = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
