import { Component } from "react";

import { Chart, ChartCurrencyCard, ChartEditor, Dropdown, Wrapper } from "components";
import { currencyOptions } from "constants/index";
import { changeChartData } from "utils";
import { HistoryData } from "types/index";

interface TimelineState {
  data: HistoryData[];
  curCode: string;
}
export class Timeline extends Component {
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
      <main>
        <Wrapper>
          <Dropdown options={currencyOptions} onChange={this.handleCurChange} />{" "}
          <ChartCurrencyCard curCode={curCode} />
          <ChartEditor changeData={this.hanldeDataChange} />
          <Chart data={data} curCode={curCode} setData={(val) => this.setState({ data: val })} />;
        </Wrapper>
      </main>
    );
  }
}
