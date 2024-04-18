import { BrowserRouter } from "react-router-dom";
import { Header } from "components/Header";
import { store } from "store/index";
import { ThemeEnum } from "types/defaultTheme";
import { fireEvent, render } from "./test-utils";

import "jest-styled-components";

describe("Should toggle theme", () => {
  it("Should change state in redux", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const themeToggle = getAllByTestId("theme-toggle")[0] as HTMLInputElement;

    expect(store.getState().theme.theme.type).toEqual(ThemeEnum.light);

    fireEvent.click(themeToggle);

    expect(store.getState().theme.theme.type).toEqual(ThemeEnum.dark);
  });
});
