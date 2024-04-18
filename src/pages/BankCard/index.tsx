import React from "react";
import { MapComponent } from "components/MapComponent";
import { SearchContainer } from "components/SearchContainer";

export class BankCard extends React.Component {
  render() {
    return (
      <>
        <SearchContainer />
        <MapComponent />
      </>
    );
  }
}
