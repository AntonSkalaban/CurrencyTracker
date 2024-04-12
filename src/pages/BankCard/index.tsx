import React from "react";
import { MapComponent } from "components/MapComponent";
import { SearchContainer } from "components/SearchContainer";

import "maplibre-gl/dist/maplibre-gl.css";

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
