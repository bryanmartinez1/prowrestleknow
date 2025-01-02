import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders App component", () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
