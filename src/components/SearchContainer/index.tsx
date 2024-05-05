import { Component } from "react";
import { H3 } from "components/styled";

import { ElasticSearch } from "./ElasticSearch";
import { StyledSearchContainer } from "./styled";

export class SearchContainer extends Component {
  render() {
    return (
      <StyledSearchContainer>
        <H3>Search currency in the bank</H3>
        <ElasticSearch />
      </StyledSearchContainer>
    );
  }
}
