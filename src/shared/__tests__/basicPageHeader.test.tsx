import { render, screen } from "@testing-library/react";
import React from "react";
import { BasicPageHeader } from "../components/basicPageHeader";
describe("Testing page header", () => {
  render(<BasicPageHeader propsMessage={""} />);
  it("Should display Posts&Comments title", async () => {
    expect(await screen.findByText("Posts&Comments")).toBeInTheDocument();
  });
});
