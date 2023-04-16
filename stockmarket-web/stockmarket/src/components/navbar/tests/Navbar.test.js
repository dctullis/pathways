import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("renders home button", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const buttonOne = screen.getByText("Home");

  expect(buttonOne).toBeDefined();
});

test("renders add company button", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const buttonTwo = screen.getByText("Add Company");

  expect(buttonTwo).toBeDefined();
});

test("renders list all companies button", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const buttonThree = screen.getByText("List All Companies");

  expect(buttonThree).toBeDefined();
});
