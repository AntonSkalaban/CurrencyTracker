import React from "react";
import { Chart } from "components/Chart";
import { ChartEditor } from "components/Chart/ChartEditor";
import { Dropdown } from "components/Dropdown";
import { Wrapper } from "components/UI";
import { currencyOptions } from "constants/index";
import { changeChartData } from "utils/helpers/chartData";
import { HistoryData } from "types/index";

interface TimelineState {
  data: HistoryData[];
  curCode: string;
}
export class Timeline extends React.Component {
  state: TimelineState = {
    data: [],
    curCode: "EUR",
  };

  handleCurChange = (val: string) => {
    this.setState({ curCode: val });
  };

  hanldeDataChange = (newData: { date: string; minVal: string; maxVal: string }) => {
    const newChartData = changeChartData(this.state.data, newData);

    this.setState({ data: newChartData });
  };

  render() {
    const { data, curCode } = this.state;

    return (
      <Wrapper>
        <Dropdown options={currencyOptions} onChange={this.handleCurChange} />{" "}
        <ChartEditor changeData={this.hanldeDataChange} />
        <Chart data={data} curCode={curCode} setData={(val) => this.setState({ data: val })} />;
      </Wrapper>
    );
  }
}
