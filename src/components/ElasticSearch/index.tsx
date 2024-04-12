import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setCurrencyValue } from "store/slice";
import SearchIcon from "assets/svg/search.svg";
import { SearchSuggestions } from "./SearchSuggestions";
import { ElasticSearchContainer, StyledInput, StyledSearchButton } from "./styled";

interface ElasticSearchState {
  value: string;
  debouncedValue: string;
  cuurency: string;
}

interface ElasticSearchProps {
  onCurrencySelect: (value: string) => void;
}

export class ElasticSearch extends React.Component<ElasticSearchProps> {
  state: ElasticSearchState = { value: "", debouncedValue: "", cuurency: "" };

  timer: NodeJS.Timeout | null = null;

  hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ value });

    if (this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState({ debouncedValue: value });
    }, 500);
  };

  handleClick = () => this.setState({ cuurency: this.state.value });

  hanldeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") this.setState({ cuurency: this.state.value });
  };

  componentDidUpdate(
    _prevProps: Readonly<ElasticSearchProps>,
    prevState: Readonly<ElasticSearchState>
  ): void {
    if (this.state.cuurency !== prevState.cuurency) {
      this.props.onCurrencySelect(this.state.cuurency);
    }
  }

  render() {
    const { value, debouncedValue } = this.state;
    return (
      <ElasticSearchContainer>
        <StyledInput
          type="text"
          placeholder="Сurrency search..."
          aria-label="Field for entering a search query"
          value={value}
          onChange={this.hanldeChange}
          onKeyDown={this.hanldeKeyDown}
        />
        <StyledSearchButton tabIndex={0} onClick={this.handleClick}>
          <SearchIcon width={"100%"} height={"100%"} />
        </StyledSearchButton>
        <SearchSuggestions
          value={debouncedValue}
          onClick={(val) => this.setState({ value: val })}
        />
      </ElasticSearchContainer>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onCurrencySelect: (value: string) => {
      dispatch(setCurrencyValue(value));
    },
  };
};

export const NEWElasticSearch = connect(null, mapDispatchToProps)(ElasticSearch);
