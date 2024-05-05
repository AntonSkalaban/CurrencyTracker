import { useDispatch, useSelector } from "react-redux";
import { getThemeType, setTheme } from "store/slice";
import { darkTheme, lightTheme } from "constants/index";
import { ThemeEnum } from "types";

import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const themeType = useSelector(getThemeType);

  const handleChange = () => {
    const theme = themeType === ThemeEnum.light ? darkTheme : lightTheme;
    dispatch(setTheme(theme));
    localStorage.setItem("themeType", theme.type);
  };

  return (
    <>
      <SwitchInput
        data-testid="theme-toggle"
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
