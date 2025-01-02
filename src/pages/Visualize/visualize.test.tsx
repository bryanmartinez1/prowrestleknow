import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Visualize from "./Visualize";

describe("Visualize", () => {
  test("renders component", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Visualize />
      </MemoryRouter>
    );

    expect(screen.getByTestId("visualize")).toBeInTheDocument();
  });

  test("renders sidebar", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Visualize />
      </MemoryRouter>
    );

    expect(screen.getByTestId("visualize")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getAllByTestId("image_button").length).toBe(4);
  });
});
