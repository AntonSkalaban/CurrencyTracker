import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";

interface SwithProps {
  name: string;
  onChange: () => void;
  checked: boolean;
}
export const Switch: React.FC<SwithProps> = ({ name, checked, onChange }) => {
  const handleChange = () => {
    onChange();
  };

  return (
    <>
      <SwitchInput id={name} type="checkbox" checked={checked} onChange={handleChange} />
      <SwitchLabel htmlFor={name}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
