import React, { FormEvent } from "react";
import { Dropdown } from "components/Dropdown";
import { NumberInput } from "components/NumberInput";
import { StyledP, Title3 } from "components/styled";
import { dateOptions } from "constants/timeLine";
import { ChartEditorButton, ChartEditorContainer, ChartEditorForm, InputContainer } from "./styled";

interface ChartEditorProps {
  changeData: (newData: { date: string; minVal: string; maxVal: string }) => void;
}

interface ChartEditorState {
  date: string;
  minVal: string;
  maxVal: string;
}

export class ChartEditor extends React.Component<ChartEditorProps, ChartEditorState> {
  state = {
    date: dateOptions[0].value,
    minVal: "",
    maxVal: "",
  };

  hanldeDropwdownChange = (value: string) => {
    this.setState({ date: value });
  };
  hanldeInputChange = ({ name, value }: { name: string; value: string }) => {
    this.setState({ [name]: value } as Pick<ChartEditorState, keyof ChartEditorState>);
  };

  hanldeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (this.state.date && this.state.minVal && this.state.maxVal) {
      this.props.changeData(this.state);
    }
  };

  render() {
    const { minVal, maxVal } = this.state;

    return (
      <ChartEditorContainer>
        <Title3>Try yourself!</Title3>

        <ChartEditorForm onSubmit={this.hanldeSubmit}>
          <InputContainer>
            <StyledP>Change date: </StyledP>
            <Dropdown options={dateOptions} onChange={this.hanldeDropwdownChange} />
          </InputContainer>
          <InputContainer>
            <StyledP>Min value: </StyledP>
            <NumberInput name="minVal" onChange={this.hanldeInputChange} value={minVal} />
          </InputContainer>
          <InputContainer>
            <StyledP>Max value: </StyledP>
            <NumberInput name="maxVal" onChange={this.hanldeInputChange} value={maxVal} />
          </InputContainer>
          <ChartEditorButton>Submit</ChartEditorButton>
        </ChartEditorForm>
      </ChartEditorContainer>
    );
  }
}
