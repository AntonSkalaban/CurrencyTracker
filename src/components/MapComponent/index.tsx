import React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import { connect } from "react-redux";
import { Title2 } from "components";
import { RootState } from "store/index";
import { banksData } from "constants/index";
import { Bank } from "types/index";
import { mapState, mapStyleUrl } from "./constants";

import "maplibre-gl/dist/maplibre-gl.css";

interface MapComponentProps {
  currency: string;
}

interface MapComponentState {
  banksData: Bank[];
  isFetching: boolean;
  isError: boolean;
}

export class DefaultMapComponent extends React.Component<MapComponentProps, MapComponentState> {
  state: MapComponentState = {
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
    const { currency } = this.props;

    if (isError) return <Title2>Error</Title2>;
    if (isFetching) return <Title2>Fetching..</Title2>;

    return (
      <Map
        initialViewState={mapState}
        style={{ width: "100%", height: 460, marginTop: "80px" }}
        mapStyle={mapStyleUrl}
      >
        {banksData.length &&
          banksData.map(({ name, currencies, coordinates: { latitude, longitude } }) => {
            if (currency && !currencies.includes(currency)) return null;

            return <Marker key={name} longitude={longitude} latitude={latitude} color="red" />;
          })}
      </Map>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.searchCurrency.value,
  };
};

export const MapComponent = connect(mapStateToProps, null)(DefaultMapComponent);
