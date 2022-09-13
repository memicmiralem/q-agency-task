import { render, screen } from "@testing-library/react";
import { BasePageLayout } from "../pages/BasePageLayout";
describe("Testing BasePageLayout render", () => {
  render(<BasePageLayout propsMessage={""} />);
  it("Should display BasePageLayout", async () => {
    expect(await screen.getByTestId("bp-layout")).toBeInTheDocument();
  });
});
