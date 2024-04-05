import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { flexMixin, greenGradientText } from "components/styled";

export const StyledNav = styled.nav`
  width: 657px;
  height: 43px;
  ${flexMixin}
`;

export const StyledNavItem = styled.div``;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  &.active {
    ${greenGradientText}
  }
`;
