import { BurgerMenu } from "components/BurgerMenu";
import { ThemeToggle, Wrapper } from "..";
import { Nav } from "./Nav";
import {
  LargeMediaContainer,
  LogoContainer,
  LogoIcon,
  StyledHeader,
  StyledHeaderContainer,
} from "./styled";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledHeaderContainer>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>

          <LargeMediaContainer>
            <Nav />
          </LargeMediaContainer>
          <LargeMediaContainer>
            <ThemeToggle />
          </LargeMediaContainer>

          <BurgerMenu>
            <ThemeToggle />
            <Nav />
          </BurgerMenu>
        </StyledHeaderContainer>
      </Wrapper>
    </StyledHeader>
  );
};
