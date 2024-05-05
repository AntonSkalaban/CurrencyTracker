import styled from "styled-components";

import { flexSpaceBetweenMixin } from "components/styled";
import Logo from "assets/svg/logo.svg";

export const StyledHeader = styled.header`
  height: 103px;

  @media ${({ theme }) => theme.media.small} {
    height: 50px;
  }
`;

export const StyledHeaderContainer = styled.div`
  height: 100%;

  ${flexSpaceBetweenMixin};
`;

export const LogoContainer = styled.div`
  width: 40px;
  height: 40px;

  @media ${({ theme }) => theme.media.small} {
    width: 20px;
    height: 20px;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const LargeMediaContainer = styled.div`
  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;
