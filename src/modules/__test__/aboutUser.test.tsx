import { render, screen } from "@testing-library/react";
import { AboutUser } from "../users/components/aboutUser";
describe("Testing aboutUser render", () => {
  render(<AboutUser propsMessage={""} title={""} userId={0} />);
  it("Should display aboutUser component", async () => {
    expect(await screen.getByTestId("about-user")).toBeInTheDocument();
  });
});
