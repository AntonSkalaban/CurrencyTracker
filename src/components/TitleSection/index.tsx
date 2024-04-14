import { Wrapper } from "..";
import {
  LogoContainer,
  LogoIcon,
  StyledContentContainer,
  StyledSubtitle,
  StyledTitle,
  StyledTitleSection,
  StyledTitleSpan,
} from "./styled";

export const TitleSection: React.FC = () => {
  return (
    <StyledTitleSection>
      <Wrapper>
        <StyledContentContainer>
          <StyledTitle>
            Modsen Currency <br />
            <StyledTitleSpan>Tracker</StyledTitleSpan>
          </StyledTitle>
          <StyledSubtitle>
            Quotes for the dollar and other <br />
            international currencies.
          </StyledSubtitle>

          <LogoContainer>
            <LogoIcon />
          </LogoContainer>
        </StyledContentContainer>
      </Wrapper>
    </StyledTitleSection>
  );
};
