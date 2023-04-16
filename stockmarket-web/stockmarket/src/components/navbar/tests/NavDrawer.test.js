import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import NavDrawer from "../NavDrawer";
import { BrowserRouter as Router } from "react-router-dom";

test("renders open button", () => {
  render(
    <Router>
      <NavDrawer />
    </Router>
  );

  const buttonOne = screen.getByTestId("openButton");
  expect(buttonOne).toBeInTheDocument();
});

test("renders home button", () => {
  render(
    <Router>
      <NavDrawer />
    </Router>
  );

  const buttonOne = screen.getByTestId("openButton");

  fireEvent.click(buttonOne);

  const buttonTwo = screen.getByTestId("homeButton");

  expect(buttonTwo).toBeInTheDocument();
  expect(buttonOne).toBeInTheDocument();
});

test("renders add company button", () => {
    render(
      <Router>
        <NavDrawer />
      </Router>
    );
  
    const buttonOne = screen.getByTestId("openButton");
  
    fireEvent.click(buttonOne);
  
    const buttonTwo = screen.getByTestId("addCompanyButton");
  
    expect(buttonTwo).toBeInTheDocument();
    expect(buttonOne).toBeInTheDocument();
  });

  test("renders list all companies button", () => {
    render(
      <Router>
        <NavDrawer />
      </Router>
    );
  
    const buttonOne = screen.getByTestId("openButton");
  
    fireEvent.click(buttonOne);
  
    const buttonTwo = screen.getByTestId("listCompanyButton");
  
    expect(buttonTwo).toBeInTheDocument();
    expect(buttonOne).toBeInTheDocument();
  });


