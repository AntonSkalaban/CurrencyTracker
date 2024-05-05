import { Component } from "react";
import { H2, P, StyledCardIconContainer } from "components";
import { defQuotesData } from "constants/index";

import { CardTextContainer, StyledChartCurrencyCard } from "./styled";

interface ChartCurrencyCardProps {
  curCode: string;
}
export class ChartCurrencyCard extends Component<ChartCurrencyCardProps> {
  render() {
    const card = defQuotesData.find((el) => el.code === this.props.curCode);
    return (
      <StyledChartCurrencyCard>
        <StyledCardIconContainer>{card?.img}</StyledCardIconContainer>
        <CardTextContainer>
          <H2>{card?.title}</H2>
          <P>{card?.code}</P>
        </CardTextContainer>
      </StyledChartCurrencyCard>
    );
  }
}
