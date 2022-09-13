import { render, screen } from "@testing-library/react";
import { Route, Navigate, Routes, MemoryRouter } from "react-router-dom";
import App from "../../App";
import { ROUTES } from "../../core/constants/routes";
import { PageRoutes } from "../../core/routes/PageRoutes";
import { PageNotFound } from "../pages/PageNotFound";
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
