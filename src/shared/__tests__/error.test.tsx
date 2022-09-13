import { render, screen } from "@testing-library/react";
import { Error } from "../components/error";
describe("Testing error icon render", () => {
  render(<Error propsMessage={""} />);
  it("Should display error icon", async () => {
    expect(await screen.getByTestId("error-icon")).toBeInTheDocument();
  });
});
