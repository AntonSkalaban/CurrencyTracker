import { ChangeEvent, FC, useState } from "react";

import { useClickOutside } from "hooks";

import {
  StyledDropdownBody,
  StyledDropdownConainer,
  StyledDropdownHeader,
  StyledDropdownText,
  StyledDropdownVector,
  StyledInputRadio,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "./styled";

interface DropdownProps {
  options: { name: string; value: string }[];
  onChange: (value: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(options[0].name);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useClickOutside(() => setIsOpen(false));

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(value);
    setSelectValue(name);
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <StyledDropdownConainer ref={ref}>
        <StyledDropdownHeader data-testid={"dropdown"} onClick={handleClick}>
          <StyledDropdownText>{selectValue}</StyledDropdownText>
          <StyledDropdownVector />
        </StyledDropdownHeader>
        {isOpen && (
          <StyledDropdownBody>
            <ul>
              {options.map(({ name, value }) => (
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
              ))}
            </ul>
          </StyledDropdownBody>
        )}
      </StyledDropdownConainer>

      <StyledSelect onChange={handleChange}>
        {options.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};
