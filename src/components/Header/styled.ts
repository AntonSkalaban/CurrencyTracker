import styled from "styled-components";
import { flexMixin } from "components/styled";
import Logo from "assets/svg/logo.svg";

export const StyledHeader = styled.header`
  height: 103px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledHeaderContainer = styled.div`
  height: 100%;
  ${flexMixin};
`;

export const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;
`;
