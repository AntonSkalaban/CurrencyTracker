import { Component } from "react";

import { MapComponent, SearchContainer } from "components";

export class BankCard extends Component {
  render() {
    return (
      <main>
        <SearchContainer />
        <MapComponent />
      </main>
    );
  }
}
