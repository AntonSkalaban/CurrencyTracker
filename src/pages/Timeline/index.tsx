import React from "react";
import { Chart } from "components/Chart";
import { Dropdown } from "components/Dropdown";
import { Wrapper } from "components/UI";
import { defQuotesData } from "constants/cardsData";
import { dateController } from "utils/helpers/dateController";
import { DropdownsContainer } from "./styled";

interface TimelineState {
  curCode: string;
  period: string;
  startDate: string;
}
export class Timeline extends React.Component {
  state: TimelineState = {
    curCode: "EUR",
    period: "MONTH",
    startDate: dateController.subtractOneMonthFromNow(),
  };

  handleCurChange = (val: string) => {
    this.setState({ curCode: val });
  };

  handlePeriodChange = (val: string) => {
    const [period, startDate] = val.split("%");
    this.setState({ period, startDate });
  };

  render() {
    const { curCode, period, startDate } = this.state;

    const currencyOptions = defQuotesData.map((el) => ({ name: el.code, value: el.code }));
    const dateOptions = [
      { name: "all month", value: "MONTH" + "%" + dateController.subtractOneMonthFromNow() },
      ...dateController.getDatesList(dateController.subtractOneMonthFromNow()).map((el) => ({
        name: dateController.toDDMonth(el),
        value: "DAY" + "%" + el,
      })),
    ];

    return (
      <Wrapper>
        <DropdownsContainer>
          <Dropdown options={currencyOptions} onChange={(val) => this.handleCurChange(val)} />{" "}
          <Dropdown options={dateOptions} onChange={(val) => this.handlePeriodChange(val)} />
        </DropdownsContainer>
        <Chart curCode={curCode} period={period} date={startDate} />;
      </Wrapper>
    );
  }
}
