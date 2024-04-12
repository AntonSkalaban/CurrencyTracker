import React from "react";
import { getSuggestionsValues } from "utils/helpers";
import { StyledSearchSuggestionsContainer, StyledSearchSuggestionsLi } from "./styled";

interface SearchSuggestionsProps {
  value: string;
  onClick: (val: string) => void;
}

interface SearchSuggestionsState {
  isOpen: boolean;
  suggestionData: string[];
}

export class SearchSuggestions extends React.Component<
  SearchSuggestionsProps,
  SearchSuggestionsState
> {
  state = { isOpen: false, suggestionData: [] };

  componentDidUpdate(prevProps: Readonly<SearchSuggestionsProps>) {
    const { value } = this.props;
    if (prevProps.value === value) return;

    this.setState({ isOpen: !!value });
    if (value) this.setState({ suggestionData: getSuggestionsValues(value) });
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
