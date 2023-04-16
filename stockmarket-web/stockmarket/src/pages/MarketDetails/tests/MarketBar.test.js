import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import MarketBar from "../MarketBar";
import { BrowserRouter as Router } from "react-router-dom";
import { MarketContext } from "context/MarketContext";

const contextValue = {
  companyCode: "",
  setCompanyCode: () => {},
  startDate: "",
  setStartDate: () => {},
  endDate: "",
  setEndDate: () => {},
  setStockPrice: () => {},
};

test("renders company dropdown", () => {
  render(
    <Router>
      <MarketContext.Provider value={contextValue}>
        <MarketBar />
      </MarketContext.Provider>
    </Router>
  );

  const companyDropdown = screen.getByTestId("companyDropdown");
  expect(companyDropdown).toBeInTheDocument();
});

test("renders stock price button", () => {
  render(
    <Router>
      <MarketContext.Provider value={contextValue}>
        <MarketBar />
      </MarketContext.Provider>
    </Router>
  );

  const stockPriceButton = screen.getByTestId("stockPriceButton");
  expect(stockPriceButton).toBeInTheDocument();
});

test("renders stock price add button", () => {
  render(
    <Router>
      <MarketContext.Provider value={contextValue}>
        <MarketBar />
      </MarketContext.Provider>
    </Router>
  );

  const stockPriceButtonAdd = screen.getByTestId("stockPriceButtonAdd");
  expect(stockPriceButtonAdd).toBeInTheDocument();
});
