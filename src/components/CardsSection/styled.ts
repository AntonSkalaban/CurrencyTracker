import { styled } from "styled-components";
import { Title2 } from "components/styled";

export const StyledCardsSection = styled.section`
  margin-top: 60px;
`;

export const StyledCardsSectionHeader = styled.div`
  width: 520px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
  padding-bottom: 25px;
`;

export const StyledCardsSectionTitle = styled(Title2)``;
