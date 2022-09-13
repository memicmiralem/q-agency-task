import { render, screen } from "@testing-library/react";
import { PostsPage } from "../posts/pages/PostsPage";
describe("Testing aboutUser render", () => {
  render(<PostsPage propsMessage={""} />);
  it("Should display aboutUser component", async () => {
    expect(await screen.getByTestId("posts-page")).toBeInTheDocument();
  });
});
