import { darkTheme, lightTheme } from "components/Theme/Theme";
import { ThemeEnum } from "types/defaultTheme";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";

export const ThemeToggle: React.FC = () => {
  const themeType = ThemeEnum.light;

  const handleChange = () => {
    const theme = themeType === ThemeEnum.light ? darkTheme : lightTheme;
    localStorage.setItem("themeType", theme.type);
  };

  return (
    <>
      <SwitchInput
        id={"theme-toggle"}
        type="checkbox"
        checked={themeType === ThemeEnum.light}
        onChange={handleChange}
      />
      <SwitchLabel htmlFor={"theme-toggle"}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
