import { useState } from "react";
import { StyledNumberInput } from "./styled";

interface NumberInputProps {
  defVal?: string;
  onChange: (val: string) => void;
}
export const NumberInput: React.FC<NumberInputProps> = ({ defVal, onChange }) => {
  const [value, setValue] = useState(defVal || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length > 5) return;
    const value = val.replace(/\D/g, "");
    setValue(value);
    onChange(value);
  };

  return (
    <StyledNumberInput
      type="tel"
      value={value}
      onChange={handleChange}
      data-testid="number-input"
    ></StyledNumberInput>
  );
};
