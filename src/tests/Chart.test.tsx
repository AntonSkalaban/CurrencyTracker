import { Timeline } from "pages/Timeline";
import { Chart } from "components/Chart";
import { cache } from "utils/cache";
import { chartData } from "./mock/data";
import { render, waitFor } from "./test-utils";

beforeAll(() => {
  const popUpRoot = document.createElement("div");
  popUpRoot.id = "pop-up-root";
  document.body.appendChild(popUpRoot);
  cache.setObj("USD", chartData);
});

afterAll(() => {
  const popUpRoot = document.getElementById("pop-up-root");
  if (popUpRoot) {
    document.body.removeChild(popUpRoot);
  }
});

describe("Chart component", () => {
  it("renders loading spinner when fetching data", async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByTestId } = render(<Chart curCode="USD" data={[]} setData={() => {}} />);
    expect(getByTestId("loading-spinner")).toBeDefined();
  });

  it("renders error message when data fetching fails", async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByText } = render(<Chart curCode="USD" data={[]} setData={() => {}} />);

    await waitFor(() => {
      expect(getByText("Error..")).toBeDefined();
    });
  });

  it("displays chart when data is loaded", async () => {
    const { container } = render(<Timeline />);

    await waitFor(() => {
      const canvasElement = container.querySelector("canvas");
      expect(canvasElement).toBeDefined();
    });
  });
});
