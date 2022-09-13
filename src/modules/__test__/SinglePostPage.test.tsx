import { render, screen } from "@testing-library/react";
import { SinglePostPage } from "../posts/pages/SinglePostPage";
describe("Testing SinglePostPage render", () => {
  render(<SinglePostPage propsMessage={""} />);
  it("Should display error component because of hook", async () => {
    expect(
      await screen.getByTestId("single-post-page-error")
    ).toBeInTheDocument();
  });
});
