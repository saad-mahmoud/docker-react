import { render, screen } from "@testing-library/react";
import App from "./App";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test("render p element", () => {
  render(<App />);

  screen.debug();

  expect(
    screen.getByText("I was changed on the feature branch")
  ).toBeInTheDocument();
});
