import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CompanyListTable from "../CompanyListTable";
import { MarketContext } from "context/MarketContext";

test("renders company list table", () => {
  const rows = [
    {
      companyName: "Corp",
      companyCEO: "CEO",
      companyTurnover: 80000,
      companyWebsite: "corporation.com",
      listedStockExchange: "BSE",
    },
  ];

  const contextValue = { setCompanyCode: () => {} };

  render(
    <Router>
      <MarketContext.Provider value={ contextValue }>
        <CompanyListTable rows={rows} /> 
      </MarketContext.Provider>
    </Router>
  );

  const table = screen.getByTestId("listCompanyTable");
  expect(table).toBeInTheDocument();
});

test("renders company list table header labels", () => {
    const rows = [
      {
        companyName: "Corp",
        companyCEO: "CEO",
        companyTurnover: 80000,
        companyWebsite: "corporation.com",
        listedStockExchange: "BSE",
      },
    ];
  
    const contextValue = { setCompanyCode: () => {} };
  
    render(
      <Router>
        <MarketContext.Provider value={ contextValue }>
          <CompanyListTable rows={rows} /> 
        </MarketContext.Provider>
      </Router>
    );
  
    const labelOne = screen.getByText("Company Name");
    const labelTwo = screen.getByText("Company Code");
    const labelThree = screen.getByText("Company CEO");
    const labelFour = screen.getByText("Company Turnover");
    const labelFive = screen.getByText("Stock Exchange");
    expect(labelOne).toBeVisible();
    expect(labelTwo).toBeVisible();
    expect(labelThree).toBeVisible();
    expect(labelFour).toBeVisible();
    expect(labelFive).toBeVisible();
  });
