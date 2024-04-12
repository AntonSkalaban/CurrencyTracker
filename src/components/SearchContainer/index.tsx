import React from "react";
import { NEWElasticSearch } from "components/ElasticSearch";
import { StyledSearchContainer, StyledText } from "./styled";

export class SearchContainer extends React.Component {
  render() {
    return (
      <StyledSearchContainer>
        <StyledText>Search currency in the bank</StyledText>
        <NEWElasticSearch />
      </StyledSearchContainer>
    );
  }
}
