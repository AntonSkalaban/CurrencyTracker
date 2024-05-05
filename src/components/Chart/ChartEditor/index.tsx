import { FormEvent, PureComponent } from "react";

import { Dropdown, H3, NumberInput, P } from "components";
import { dateOptions } from "constants/index";

import { ChartEditorButton, ChartEditorContainer, ChartEditorForm, InputContainer } from "./styled";

interface ChartEditorProps {
  changeData: (newData: { date: string; minVal: string; maxVal: string }) => void;
}

interface ChartEditorState {
  date: string;
  minVal: string;
  maxVal: string;
}

export class ChartEditor extends PureComponent<ChartEditorProps, ChartEditorState> {
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
        <H3>Try yourself!</H3>

        <ChartEditorForm onSubmit={this.hanldeSubmit}>
          <InputContainer>
            <P>Change date: </P>
            <Dropdown options={dateOptions} onChange={this.hanldeDropwdownChange} />
          </InputContainer>
          <InputContainer>
            <P>Min value: </P>
            <NumberInput name="minVal" onChange={this.hanldeInputChange} value={minVal} />
          </InputContainer>
          <InputContainer>
            <P>Max value: </P>
            <NumberInput name="maxVal" onChange={this.hanldeInputChange} value={maxVal} />
          </InputContainer>
          <ChartEditorButton>Submit</ChartEditorButton>
        </ChartEditorForm>
      </ChartEditorContainer>
    );
  }
}
