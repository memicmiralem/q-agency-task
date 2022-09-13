import { render, screen } from "@testing-library/react";
import { Loading } from "../components/loading";
describe("Testing error icon render", () => {
  render(<Loading propsMessage={""} />);
  it("Should display error icon", async () => {
    expect(await screen.getByTestId("loading-icon")).toBeInTheDocument();
  });
});
