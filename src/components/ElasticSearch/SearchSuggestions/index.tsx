import React from "react";
import { defQuotesData } from "constants/cardsData";
import { StyledSearchSuggestionsContainer, StyledSearchSuggestionsLi } from "./styled";

interface SearchSuggestionsProps {
  value: string;
  onClick: (val: string) => void;
}

interface SearchSuggestionsState {
  isOpen: boolean;
  suggestionData: string[];
}

export class SearchSuggestions extends React.Component<SearchSuggestionsProps> {
  state: SearchSuggestionsState = { isOpen: false, suggestionData: [] };

  getSuggestionsData = (value: string) => {
    return defQuotesData.reduce((acc, val) => {
      if (val.code.includes(value.toUpperCase())) acc.push(val.code);
      return acc;
    }, [] as string[]);
  };

  componentDidUpdate(prevProps: Readonly<SearchSuggestionsProps>) {
    const { value } = this.props;
    if (prevProps.value === value) return;

    this.setState({ isOpen: !!value });
    if (value) this.setState({ suggestionData: this.getSuggestionsData(value) });
  }

  render() {
    const { suggestionData, isOpen } = this.state;
    return (
      <>
        {isOpen && (
          <StyledSearchSuggestionsContainer>
            <ul>
              {suggestionData.map((val) => {
                return (
                  <StyledSearchSuggestionsLi key={val} onClick={() => this.props.onClick(val)}>
                    {val}
                  </StyledSearchSuggestionsLi>
                );
              })}
            </ul>
          </StyledSearchSuggestionsContainer>
        )}
      </>
    );
  }
}
