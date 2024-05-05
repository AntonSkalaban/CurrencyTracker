import { Component } from "react";

import { StyledPopUp, StyledText } from "./styled";

interface PopUpProps {
  message: string;
}

export class PopUp extends Component<PopUpProps> {
  render() {
    return (
      <StyledPopUp>
        <StyledText>{this.props.message}</StyledText>
      </StyledPopUp>
    );
  }
}
