import { styled } from "styled-components";

import { H2 } from "components/styled";

export const StyledCardsSection = styled.section`
  margin-top: 60px;
`;

export const StyledCardsSectionHeader = styled.div`
  width: 520px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
  padding-bottom: 25px;

  @media ${({ theme }) => theme.media.large} {
    width: 45%;
  }
  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const StyledCardsSectionTitle = styled(H2)``;
