import { styled } from "styled-components";

export const StyledP = styled.p`
  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Title2 = styled.h2`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Title3 = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;

  color: ${({ theme }) => theme.colors.white};
`;
