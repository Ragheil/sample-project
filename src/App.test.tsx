import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./router/AppRouter", () => () => (
  <div>Routed app shell</div>
));

test("renders the routed app shell", () => {
  render(<App />);
  expect(screen.getByText(/Routed app shell/i)).toBeInTheDocument();
});
