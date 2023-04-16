import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import AddCompanyForm from "../AddCompanyForm";
import { BrowserRouter as Router } from "react-router-dom";

test("company name field displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyName");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("company code field displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyCode");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("company ceo field displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyCEO");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("company turnover field displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyTurnover");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("company website field displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyWebsite");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("company stock exchange dropdown displays", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const field = screen.getByTestId("companyStockExchange");
  expect(field).toBeInTheDocument();
  expect(field).toBeVisible();
});

test("renders add button", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const buttonOne = screen.getByTestId("addButton");

  expect(buttonOne).toBeInTheDocument();
  expect(buttonOne).toBeVisible();
});

test("renders clear button", () => {
  render(
    <Router>
      <AddCompanyForm />
    </Router>
  );

  const buttonOne = screen.getByTestId("clearButton");

  expect(buttonOne).toBeInTheDocument();
  expect(buttonOne).toBeVisible();
});
