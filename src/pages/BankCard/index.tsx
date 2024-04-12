import React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import { connect } from "react-redux";
import { SearchContainer } from "components/SearchContainer";
import { Title2 } from "components/styled";
import { RootState } from "store/index";
import { banksData } from "constants/banksData";
import { Bank } from "types/index";

import "maplibre-gl/dist/maplibre-gl.css";

interface BankCardProps {
  currency: string;
}
interface BankCardState {
  banksData: Bank[];
  isFetching: boolean;
  isError: boolean;
}
export class BankCard extends React.Component<BankCardProps> {
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

  componentDidUpdate(prevProps: Readonly<BankCardProps>): void {
    console.log(prevProps.currency);
    console.log(this.props.currency);
  }
  render() {
    const { banksData, isFetching, isError } = this.state;

    if (isError) return <Title2>Error</Title2>;
    if (isFetching) return <Title2>Fetching..</Title2>;
    console.log(this.props.currency);
    return (
      <>
        <SearchContainer />
        <Map
          initialViewState={{
            latitude: 53.9023,
            longitude: 27.5619,
            zoom: 10,
          }}
          style={{ width: "100%", height: 460, marginTop: "80px" }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          {banksData.length && this.props.currency
            ? banksData.map(({ name, coordinates: { latitude, longitude }, currencies }) => {
                return currencies.includes(this.props.currency) ? (
                  <Marker key={name} longitude={longitude} latitude={latitude} color="red" />
                ) : null;
              })
            : banksData.map(({ name, coordinates: { latitude, longitude } }) => {
                return <Marker key={name} longitude={longitude} latitude={latitude} color="red" />;
              })}
        </Map>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.searchCurrency.value,
  };
};

export const NEWBankCard = connect(mapStateToProps, null)(BankCard);
