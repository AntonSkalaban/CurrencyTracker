import { styled } from "styled-components";

export const P = styled.p<{ $size?: number }>`
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

export const H2 = styled.h2`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.fontMain};

  @media ${({ theme }) => theme.media.medium} {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
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

export const StyledCardIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;

  @media ${({ theme }) => theme.media.medium} {
    width: 60px;
    height: 60px;
  }
  @media ${({ theme }) => theme.media.extraSmall} {
    width: 50px;
    height: 50px;
  }
`;
