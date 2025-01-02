import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

describe("Navbar", () => {
  it("renders with Navbar component", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
      </MemoryRouter>
    );
    const navElement = screen.getByText("ProWrestleKnow");
    expect(navElement).toBeInTheDocument();
  });

  it("updates Navbar when viewport is less than 850", async () => {
    global.innerWidth = 850;
    global.dispatchEvent(new Event("resize"));

    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("ProWrestleKnow")).toBeInTheDocument();

    expect(screen.getByAltText("Menu")).toBeInTheDocument();
    await userEvent.click(screen.getByAltText("Menu"));

    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  it("updates Navbar when viewport is less than 440", async () => {
    global.innerWidth = 400;
    global.dispatchEvent(new Event("resize"));

    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("PWK")).toBeInTheDocument();

    expect(screen.getByAltText("Menu")).toBeInTheDocument();

    await userEvent.click(screen.getByAltText("Menu"));
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  describe("Modal", () => {
    it("opens Sign Up modal", async () => {
      render(
        <MemoryRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
        </MemoryRouter>
      );
      await userEvent.click(screen.getByAltText("Menu"));

      expect(screen.getByText("Sign Up")).toBeInTheDocument();

      await userEvent.click(screen.getByText("Sign Up"));

      expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("opens Log In modal", async () => {
      render(
        <MemoryRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
        </MemoryRouter>
      );

      await userEvent.click(screen.getByAltText("Menu"));

      expect(screen.getByText("Log In")).toBeInTheDocument();

      await userEvent.click(screen.getByText("Log In"));

      expect(screen.getByText("Submit")).toBeInTheDocument();
    });
  });
});
