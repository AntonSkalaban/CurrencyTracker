import {
  LogoContainer,
  LogoIcon,
  StyledContentContainer,
  StyledSubtitle,
  StyledTextContainer,
  StyledTitle,
  StyledTitleSection,
  StyledTitleSpan,
} from "./styled";

export const TitleSection: React.FC = () => {
  return (
    <StyledTitleSection>
      <StyledContentContainer>
        <StyledTextContainer>
          <StyledTitle>
            Modsen Currency <br />
            <StyledTitleSpan>Tracker</StyledTitleSpan>
          </StyledTitle>
          <StyledSubtitle>
            Quotes for the dollar and other <br />
            international currencies.
          </StyledSubtitle>
        </StyledTextContainer>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
      </StyledContentContainer>
    </StyledTitleSection>
  );
};
