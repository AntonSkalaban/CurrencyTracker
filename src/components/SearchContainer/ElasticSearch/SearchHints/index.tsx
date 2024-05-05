import { Component } from "react";
import { getHintsValues } from "utils/helpers";

import { StyledSearchHintsContainer, StyledSearchHintsLi } from "./styled";

interface SearchHintsProps {
  value: string;
  onClick: (val: string) => void;
}

interface SearchHintsState {
  isOpen: boolean;
  suggestionData: string[];
}

export class SearchHints extends Component<SearchHintsProps, SearchHintsState> {
  state = { isOpen: false, suggestionData: [] };

  componentDidUpdate(prevProps: Readonly<SearchHintsProps>) {
    const { value } = this.props;
    if (prevProps.value === value) return;

    this.setState({ isOpen: !!value });
    if (value) this.setState({ suggestionData: getHintsValues(value) });
  }

  hanldeClick = (val: string) => () => {
    this.props.onClick(val);
    this.setState({ isOpen: false });
  };

  render() {
    const { suggestionData, isOpen } = this.state;
    return (
      <>
        {isOpen && (
          <StyledSearchHintsContainer>
            <ul>
              {suggestionData.map((val) => (
                <StyledSearchHintsLi key={val} onClick={this.hanldeClick(val)}>
                  {val}
                </StyledSearchHintsLi>
              ))}
            </ul>
          </StyledSearchHintsContainer>
        )}
      </>
    );
  }
}
