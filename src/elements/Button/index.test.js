import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from ".";

test("should be disabled if isDisabled is true", () => {
  const { container } = render(<Button isDisabled></Button>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access, testing-library/prefer-screen-queries
  expect(getByText(/loading/i)).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("a")).toBeInTheDocument();
});
