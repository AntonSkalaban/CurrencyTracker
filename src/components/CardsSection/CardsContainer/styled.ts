import { styled } from "styled-components";

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 520px 520px;
  justify-content: space-between;
  row-gap: 56px;
  margin-top: 50px;

  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: 45% 45%;
  }

  @media ${({ theme }) => theme.media.medium} {
    grid-template-columns: 100%;
    row-gap: 24px;
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.media.small} {
    width: 100%;
    row-gap: 15px;
  }
`;
