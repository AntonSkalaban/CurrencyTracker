import { ChangeEvent, FC } from "react";
import { validateNumber } from "utils";

import { StyledNumberInput } from "./styled";

interface NumberInputProps {
  name: string;
  value: string;
  onChange: ({ name, value }: { name: string; value: string }) => void;
}

export const NumberInput: FC<NumberInputProps> = ({ name, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange({ name, value: validateNumber(value) });
  };

  return (
    <StyledNumberInput
      name={name}
      type="tel"
      value={value}
      onChange={handleChange}
      data-testid="number-input"
    />
  );
};
