import styled from "styled-components";
import { greenGradientText } from "components/styled";
import Logo from "assets/svg/logo-big.svg";

export const StyledTitleSection = styled.section`
  height: 417px;

  background: linear-gradient(252.93deg, #121212 11.77%, rgba(36, 121, 64, 0) 91.12%);

  margin: 0 auto;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  filter: drop-shadow(0px 3.16353px 3.16353px rgba(0, 0, 0, 0.5));

  padding-top: 33px;
  margin-left: 45px;
  align-items: center;
`;

export const StyledTextContainer = styled.div`
  width: 760px;
  height: 345px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledTitle = styled.h1`
  width: 100%;
  font-size: 76px;
  font-weight: 600;
  line-height: 114px;
  ${greenGradientText}

  padding-right: 54px;
`;

export const StyledTitleSpan = styled.span`
  font-size: 90px;
  font-weight: 600;
  line-height: 98px;

  padding-left: 350px;
`;

export const LogoContainer = styled.div`
  width: 300px;
  height: 312px;
`;

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const StyledSubtitle = styled.p`
  width: 400px;
  font-weight: 300;
  font-size: 25px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: center;
`;
