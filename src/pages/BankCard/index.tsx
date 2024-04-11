import React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import { Title2 } from "components/styled";
import { banksData } from "constants/banksData";
import { Bank } from "types/index";

import "maplibre-gl/dist/maplibre-gl.css";

interface BankCardState {
  banksData: Bank[];
  isFetching: boolean;
  isError: boolean;
}
export class BankCard extends React.Component {
  state: BankCardState = {
    banksData: [],
    isFetching: false,
    isError: false,
  };

  getBanksData = async () => {
    try {
      this.setState({
        isError: false,
        isFetching: true,
      });

      this.setState({ banksData: banksData });
    } catch (e) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  componentDidMount(): void {
    this.getBanksData();
  }

  render() {
    const { banksData, isFetching, isError } = this.state;

    if (isError) return <Title2>Error</Title2>;
    if (isFetching) return <Title2>Fetching..</Title2>;
    return (
      <>
        <Map
          initialViewState={{
            latitude: 53.9023,
            longitude: 27.5619,
            zoom: 14,
          }}
          style={{ width: "100%", height: 460 }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          {banksData.length &&
            banksData.map(({ name, coordinates: { latitude, longitude } }) => {
              return <Marker key={name} longitude={longitude} latitude={latitude} color="red" />;
            })}
        </Map>
      </>
    );
  }
}
