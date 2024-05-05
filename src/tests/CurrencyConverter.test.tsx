import { fireEvent, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { CurrencyConverter } from "components/CardModalContent/CurrencyConverter";
import { handlers } from "./mock/handlers";
import { render } from "./test-utils";
export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("react-map-gl/maplibre", () => ({
  Map: () => ({}),
}));

describe("CurrencyConverter component", () => {
  it("displays fetching message when loading data", () => {
    const { getByText } = render(<CurrencyConverter />);
    expect(getByText("Fetching...")).toBeDefined();
  });

  it("displays converted amount", async () => {
    const { getByTestId } = render(<CurrencyConverter />);
    await waitFor(() => {
      expect(getByTestId("converted-value").textContent).toEqual("2.00");
    });
  });

  it("should convert amount", async () => {
    const { getByTestId, findByTestId } = render(<CurrencyConverter />);

    const numberInput = (await findByTestId("number-input")) as HTMLInputElement;
    fireEvent.change(numberInput, { target: { value: "5" } });

    await waitFor(() => {
      const convertedValue = getByTestId("converted-value") as HTMLElement;
      expect(convertedValue.textContent).toEqual("10.00");
    });
  });
});
