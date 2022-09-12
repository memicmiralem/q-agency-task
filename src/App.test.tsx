import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MESSAGES } from "./core/constants/messages";

test("renders learn react link", () => {
  render(<App propsMessage={MESSAGES.HELLO} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
