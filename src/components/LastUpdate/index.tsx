import { FC } from "react";

import {
  StyledBigSircle,
  StyledLastUpdateContainer,
  StyledSmallCircle,
  StyledText,
} from "./styled";

export const LastUpdate: FC = () => {
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
