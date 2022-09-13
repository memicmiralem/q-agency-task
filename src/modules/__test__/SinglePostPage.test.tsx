import { render, screen } from "@testing-library/react";
import { SinglePostPage } from "../posts/pages/SinglePostPage";
describe("Testing aboutUser render", () => {
  render(<SinglePostPage propsMessage={""} />);
  it("Should display aboutUser component", async () => {
    expect(await screen.getByTestId("single-post-page")).toBeInTheDocument();
  });
});
