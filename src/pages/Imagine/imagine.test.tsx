import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Imagine from "./Imagine";

describe("Imagine", () => {
  test("renders component", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Imagine />
      </MemoryRouter>
    );

    expect(screen.getByTestId("imagine")).toBeInTheDocument();
  });

  test("renders sidebar", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Imagine />
      </MemoryRouter>
    );

    expect(screen.getByTestId("imagine")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getAllByTestId("image_button").length).toBe(6);
  });
});