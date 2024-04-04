import { ThemeToggle, Wrapper } from "..";
import { Nav } from "./Nav";
import { LogoContainer, LogoIcon, StyledHeader, StyledHeaderContainer } from "./styled";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledHeaderContainer>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>

          <Nav />

          <ThemeToggle />
        </StyledHeaderContainer>
      </Wrapper>
    </StyledHeader>
  );
};
