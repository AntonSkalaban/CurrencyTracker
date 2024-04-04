import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { flexMixin } from "components/styled";

export const StyledNav = styled.nav`
  width: 657px;
  height: 43px;
  ${flexMixin}
`;

export const StyledNavItem = styled.div``;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  &.active {
    background: linear-gradient(${({ theme }) => theme.colors.ligthGreen});
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;
