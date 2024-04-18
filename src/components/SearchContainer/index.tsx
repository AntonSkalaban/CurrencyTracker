import React from "react";
import { Title3 } from "components/styled";
import { ElasticSearch } from "./ElasticSearch";
import { StyledSearchContainer } from "./styled";

export class SearchContainer extends React.Component {
  render() {
    return (
      <StyledSearchContainer>
        <Title3>Search currency in the bank</Title3>
        <ElasticSearch />
      </StyledSearchContainer>
    );
  }
}
