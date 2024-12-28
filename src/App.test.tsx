import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders learn react link", () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/ProWrestleKnow/i);
    expect(linkElement).toBeInTheDocument();
  });
});
