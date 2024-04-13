import { StyledNumberInput } from "./styled";

interface NumberInputProps {
  name: string;
  value: string;
  onChange: (val: string) => void;
}
export const NumberInput: React.FC<NumberInputProps> = ({ name, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length > 5) return;
    const value = val.replace(/\D/g, "");

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
