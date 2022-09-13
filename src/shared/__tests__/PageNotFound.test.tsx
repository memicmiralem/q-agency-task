import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PageRoutes } from "../../core/routes/PageRoutes";
describe("Testing non-existing url", () => {
  const badRoute = "/some/bad/route";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <PageRoutes propsMessage={""} />
    </MemoryRouter>
  );
  it("Should display 404 page", async () => {
    expect(await screen.findByText("404 page not found")).toBeInTheDocument();
  });
});
