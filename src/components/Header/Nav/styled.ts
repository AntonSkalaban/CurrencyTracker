import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { flexMixin, greenGradientText } from "components/styled";

export const StyledNav = styled.nav`
  width: 657px;
  height: 43px;
  ${flexMixin}

  @media ${({ theme }) => theme.media.medium} {
    width: 500px;
  }

  @media ${({ theme }) => theme.media.small} {
    width: fit-content;
    flex-direction: column;
    text-align: start;
    align-items: start;
    justify-content: start;
    padding-right: 20px;
  }
`;

export const StyledNavItem = styled.div``;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontSecondary};
  &.active {
    ${greenGradientText}
  }
`;
