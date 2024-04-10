import React from "react";
import { StyledPopUp } from "./styled";

interface PopUpProps {
  message: string;
}
export class PopUp extends React.Component<PopUpProps> {
  render() {
    return <StyledPopUp>{this.props.message}</StyledPopUp>;
  }
}
