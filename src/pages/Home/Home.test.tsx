import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("renders Home", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
