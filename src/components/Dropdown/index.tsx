import { useState } from "react";
import { useClickOutside } from "utils/hooks/useClickOutside";
import Vector from "assets/svg/vector.svg";
import {
  StyledDropdownBody,
  StyledDropdownConainer,
  StyledDropdownHeader,
  StyledDropdownText,
  StyledInputRadio,
  StyledLabel,
  StyledOption,
} from "./styled";

interface DropdownProps {
  options: { name: string; value: string }[];
  defValue?: string;
  onChange: (value: string) => void;
}
export const Dropdown: React.FC<DropdownProps> = ({ options, onChange, defValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(defValue || options[0].name);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useClickOutside(() => setIsOpen(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    onChange(target.value);
    setSelectValue(target.name);
    setIsOpen(false);
  };

  return (
    <StyledDropdownConainer ref={ref}>
      <StyledDropdownHeader onClick={handleClick}>
        <StyledDropdownText>{selectValue}</StyledDropdownText>
        <Vector width={16} height={16} />
      </StyledDropdownHeader>
      {isOpen && (
        <StyledDropdownBody>
          <ul>
            {options.map(({ name, value }) => {
              return (
                <StyledOption key={name}>
                  <StyledLabel>
                    {name}
                    <StyledInputRadio
                      type="radio"
                      name={name}
                      value={value}
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
