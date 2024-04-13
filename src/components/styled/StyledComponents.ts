import { styled } from "styled-components";

export const StyledP = styled.p<{ $size?: number }>`
  font-weight: 300;
  font-size: ${(props) => props.$size || 32}px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.fontSecondary};
`;

export const Title2 = styled.h2`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.fontMain};
`;

export const Title3 = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;

  color: ${({ theme }) => theme.colors.fontMain};
`;
