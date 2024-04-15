import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { App } from "../App";
import { fireEvent, render } from "./test-utils";

import "@testing-library/jest-dom";

jest.mock("react-map-gl/maplibre", () => ({
  Map: () => ({}),
}));

describe("App component", () => {
  it("full app rendering/navigating", async () => {
    const { getByText, getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(getByText(/Stocks/i)).toBeInTheDocument();

    fireEvent.click(getAllByText(/Timeline/i)[0]);

    expect(getByText(/Try yourself!/i)).toBeInTheDocument();
  });

  it("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    const { getByText } = render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    expect(getByText(/Not found.../i)).toBeInTheDocument();
  });
});
