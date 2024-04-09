import React from "react";
import { Chart } from "components/Chart";

export class Timeline extends React.Component {
  state = { curCode: "USD" };

  render() {
    return (
      <>
        {" "}
        <Chart curCode={this.state.curCode} />;
      </>
    );
  }
}
