import {
  StyledBigSircle,
  StyledLastUpdateContainer,
  StyledSmallCircle,
  StyledText,
} from "./styled";

export const LastUpdate: React.FC = () => {
  return (
    <StyledLastUpdateContainer>
      {" "}
      <StyledSmallCircle>
        {" "}
        <StyledBigSircle />
      </StyledSmallCircle>{" "}
      <StyledText>Last updated at 11:59pm</StyledText>
    </StyledLastUpdateContainer>
  );
};
