import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App render", () => {
  render(<App propsMessage={""} />);
  it("Should App icon", async () => {
    expect(await screen.getByTestId("app")).toBeInTheDocument();
  });
});
