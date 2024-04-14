import { styled } from "styled-components";

export const StyledP = styled.p<{ $size?: number }>`
  font-weight: 300;
  font-size: 32px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.fontSecondary};

  @media ${({ theme }) => theme.media.large} {
    font-size: 26px;
    line-height: 36px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Title2 = styled.h2`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.fontMain};

  @media ${({ theme }) => theme.media.medium} {
    font-size: 28px;
  }
`;

export const Title3 = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;

  color: ${({ theme }) => theme.colors.fontMain};

  @media ${({ theme }) => theme.media.large} {
    font-size: 26px;
    line-height: 30px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
  }
`;
