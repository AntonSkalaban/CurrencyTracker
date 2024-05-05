import { FC } from "react";
import { PagesNames, PagesPaths } from "types";

import { StyledNav, StyledNavItem, StyledNavLink } from "./styled";

const pages = [
  { name: PagesNames.Home, path: PagesPaths.Home },
  { name: PagesNames.Timeline, path: PagesPaths.Timeline },
  { name: PagesNames.BankCard, path: PagesPaths.BankCard },
  { name: PagesNames.Contato, path: PagesPaths.Contato },
];

export const Nav: FC = () => {
  return (
    <StyledNav>
      {pages.map(({ name, path }) => {
        return (
          <StyledNavItem key={path}>
            <StyledNavLink data-testid={path} to={"/" + path}>
              {name}
            </StyledNavLink>
          </StyledNavItem>
        );
      })}
    </StyledNav>
  );
};
