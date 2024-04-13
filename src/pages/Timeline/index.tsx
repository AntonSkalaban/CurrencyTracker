import React from "react";
import { Chart } from "components/Chart";
import { Dropdown } from "components/Dropdown";
import { NumberInput } from "components/NumberInput";
import { Wrapper } from "components/UI";
import { currencyOptions, dateOptions } from "constants/index";
import { dateController } from "utils/helpers";
import { DropdownsContainer } from "./styled";

interface TimelineState {
  curCode: string;
  period: string;
  startDate: string;
  minValue: string;
}
export class Timeline extends React.Component {
  state: TimelineState = {
    curCode: "EUR",
    period: "MONTH",
    startDate: dateController.subtractOneMonthFromNow(),
    minValue: "",
  };

  handleCurChange = (val: string) => {
    this.setState({ curCode: val });
  };

  handleStartDateChange = (val: string) => {
    const [period, startDate] = val.split("%");
    this.setState({ period, startDate });
  };

  handleNumInputChange = (val: string) => {
    return val;
  };

  render() {
    const { curCode, period, startDate } = this.state;

    return (
      <Wrapper>
        <DropdownsContainer>
          <Dropdown options={currencyOptions} onChange={(val) => this.handleCurChange(val)} />{" "}
          <Dropdown options={dateOptions} onChange={(val) => this.handleStartDateChange(val)} />
        </DropdownsContainer>
        <div>
          <NumberInput name="minValue" onChange={} value={""} />
        </div>
        <Chart curCode={curCode} period={period} date={startDate} />;
      </Wrapper>
    );
  }
}
