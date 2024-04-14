import styled from "styled-components";
import { greenGradientText } from "components/styled";
import Logo from "assets/svg/logo-big.svg";

export const StyledTitleSection = styled.section`
  background: linear-gradient(
    66deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(36, 121, 64, 0.3) 52%,
    rgba(0, 0, 0, 1) 100%
  );

  margin: 0 auto;
`;

export const StyledContentContainer = styled.div`
  filter: drop-shadow(0px 3.16353px 3.16353px rgba(0, 0, 0, 0.5));

  padding-top: 33px;
  padding-bottom: 58px;

  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;

  @media ${({ theme }) => theme.media.large} {
  }

  @media ${({ theme }) => theme.media.medium} {
    align-items: start;
    padding: 15px 0;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 10px 0;
  }
`;

export const StyledTitle = styled.h1`
  width: 100%;
  font-size: 76px;
  font-weight: 600;
  line-height: 114px;
  ${greenGradientText}

  grid-column: 1;
  grid-row: 1;

  padding-right: 54px;
  text-align: end;

  @media ${({ theme }) => theme.media.large} {
    font-size: 60px;
    line-height: 90px;
  }

  @media ${({ theme }) => theme.media.medium} {
    font-size: 50px;
    line-height: 70px;

    padding-right: 30px;
  }

  @media ${({ theme }) => theme.media.small} {
    font-size: 35px;
    line-height: 50px;
    padding-right: 20px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    font-size: 28px;
    line-height: 34px;
    padding-right: 20px;
  }
`;

export const StyledTitleSpan = styled.span`
  font-size: 90px;
  font-weight: 600;
  line-height: 98px;

  padding-left: 10px;

  @media ${({ theme }) => theme.media.large} {
    font-size: 70px;
    line-height: 80px;
  }

  @media ${({ theme }) => theme.media.medium} {
    font-size: 55px;
    line-height: 75px;
  }

  @media ${({ theme }) => theme.media.small} {
    font-size: 40px;
    line-height: 50px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const LogoContainer = styled.div`
  width: 300px;
  height: 100%;

  grid-column: 2;
  grid-row: 1 / span 2;

  @media ${({ theme }) => theme.media.large} {
    width: 250px;
  }

  @media ${({ theme }) => theme.media.medium} {
    width: 150px;
    height: 150px;
  }
  @media ${({ theme }) => theme.media.small} {
    width: 102px;
    height: 102px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    width: 74px;
    height: 74px;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const StyledSubtitle = styled.p`
  grid-column: 1;
  grid-row: 2;

  font-weight: 300;
  font-size: 25px;
  line-height: 46px;

  color: ${({ theme }) => theme.colors.fontSecondary};
  text-align: center;
  justify-self: end;

  @media ${({ theme }) => theme.media.medium} {
    grid-column: 1 / span 2;
    justify-self: center;
    font-size: 20px;
    line-height: 35px;
  }

  @media ${({ theme }) => theme.media.small} {
    font-size: 18px;
    line-height: 26px;
  }

  @media ${({ theme }) => theme.media.extraSmall} {
    font-size: 16px;
    line-height: 24px;
  }
`;
