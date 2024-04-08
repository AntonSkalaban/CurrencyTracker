import { useState } from "react";
import { StyledP } from "components/styled";
import { useClickOutside } from "utils/hooks/useClickOutside";
import {
  StyledDropdownBody,
  StyledDropdownConainer,
  StyledDropdownHeader,
  StyledInputRadio,
  StyledLabel,
  StyledOption,
} from "./styled";

interface DropdownProps {
  name: string;
  options: string[];
  defValue?: string;
  onChange: (value: string) => void;
}
export const Dropdown: React.FC<DropdownProps> = ({ name, options, onChange, defValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(defValue || options[0]);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useClickOutside(() => setIsOpen(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
    setSelectValue(value);
  };

  return (
    <StyledDropdownConainer ref={ref}>
      <StyledDropdownHeader onClick={handleClick}>
        <StyledP>
          {selectValue} <span>^</span>
        </StyledP>
      </StyledDropdownHeader>
      {isOpen && (
        <StyledDropdownBody>
          <ul>
            {options.map((option) => {
              return (
                <StyledOption key={option}>
                  <StyledLabel>
                    {option}
                    <StyledInputRadio
                      type="radio"
                      name={name}
                      value={option}
                      onChange={handleChange}
                    />
                  </StyledLabel>
                </StyledOption>
              );
            })}
          </ul>
        </StyledDropdownBody>
      )}
    </StyledDropdownConainer>
  );
};
