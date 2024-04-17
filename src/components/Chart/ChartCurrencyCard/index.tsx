import React from "react";
import { StyledCardIconContainer, StyledP, Title2 } from "components/styled";
import { defQuotesData } from "constants/cardsData";
import { CardTextContainer, StyledChartCurrencyCard } from "./styled";

interface ChartCurrencyCardProps {
  curCode: string;
}
export class ChartCurrencyCard extends React.Component<ChartCurrencyCardProps> {
  render() {
    const card = defQuotesData.find((el) => el.code === this.props.curCode);
    return (
      <StyledChartCurrencyCard>
        <StyledCardIconContainer>{card?.img}</StyledCardIconContainer>
        <CardTextContainer>
          <Title2>{card?.title}</Title2>
          <StyledP>{card?.code}</StyledP>
        </CardTextContainer>
      </StyledChartCurrencyCard>
    );
  }
}
