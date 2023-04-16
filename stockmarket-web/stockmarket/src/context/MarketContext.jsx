import React, { useState, createContext } from "react";

export const MarketContext = createContext("market");

export default function MarketContextProvider ({children}) {
  const [companyCode, setCompanyCode] = useState("62c9e22b71a68d35dd6fd9a9");
  const [startDate, setStartDate] = useState("1900-01-01");
  const [endDate, setEndDate] = useState("3000-01-01");
  const [stockPrice, setStockPrice] = useState("0.0000");

  return (
    <MarketContext.Provider
      value={{
        companyCode,
        setCompanyCode,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        stockPrice,
        setStockPrice,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
