import { PagesNames, PagesPaths } from "types/pages";
import { StyledNav, StyledNavItem, StyledNavLink } from "./styled";

const pages = [
  { name: PagesNames.Home, path: PagesPaths.Home },
  { name: PagesNames.Timeline, path: PagesPaths.Timeline },
  { name: PagesNames.BankCard, path: PagesPaths.BankCard },
  { name: PagesNames.Contato, path: PagesPaths.Contato },
];

export const Nav = () => {
  return (
    <StyledNav>
      {pages.map(({ name, path }) => {
        return (
          <StyledNavItem key={path}>
            <StyledNavLink to={"/" + path}>{name}</StyledNavLink>
          </StyledNavItem>
        );
      })}
    </StyledNav>
  );
};
