import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setCurrencyValue } from "store/slice";
import { SearchHints } from "./SearchHints";
import {
  ElasticSearchContainer,
  StyledInput,
  StyledSearchButton,
  StyledSearchIcon,
} from "./styled";

interface ElasticSearchState {
  value: string;
  debouncedValue: string;
  cuurency: string;
}

interface ElasticSearchProps {
  onCurrencySelect: (value: string) => void;
}

export class DefaultElasticSearch extends React.Component<ElasticSearchProps, ElasticSearchState> {
  state = { value: "", debouncedValue: "", cuurency: "" };

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

  hanldeHintClick = () => (val: string) => {
    this.setState({ value: val, cuurency: val });
  };

  componentDidUpdate(
    _prevProps: Readonly<ElasticSearchProps>,
    prevState: Readonly<ElasticSearchState>,
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
          <StyledSearchIcon />
        </StyledSearchButton>
        <SearchHints value={debouncedValue} onClick={this.hanldeHintClick()} />
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

export const ElasticSearch = connect(null, mapDispatchToProps)(DefaultElasticSearch);
