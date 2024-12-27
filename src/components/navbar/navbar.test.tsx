import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

test("Navbar renders", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navbar />
    </BrowserRouter>
  );
  const navElement = screen.getByText(/ProWrestleKnow/i);
  expect(navElement).toBeInTheDocument();
});
