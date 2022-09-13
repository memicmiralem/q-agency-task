import { render, screen } from "@testing-library/react";
import { PageHeaderWithFilter } from "../components/pageHeaderWithFilter";
describe("Testing page header with filter", () => {
  render(<PageHeaderWithFilter propsMessage={""} />);
  it("Should display filter input", async () => {
    expect(
      await screen.queryByPlaceholderText("Search by user info")
    ).toBeInTheDocument();
    expect(await screen.findByText("Posts&Comments")).toBeInTheDocument();
  });
});
