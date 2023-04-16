import React, { useContext, useEffect, useState } from "react";
import {
  GetSpecificCompanyAPI,
  GetStockInformationByCompany,
  AddStockPriceAPI,
} from "../../api/MarketAPI";
import "./MarketDetails.scss";
import { StockChart } from "../../components/charts/StockChart";
import { MarketContext } from "context/MarketContext";

const MarketDetails = () => {
  const {
    companyCode,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    stockPrice,
  } = useContext(MarketContext);
  const [prices, setPrices] = useState([0.01]);
  const [company, setCompany] = useState({
    companyCode: "",
    companyName: "",
    companyCEO: "",
    companyTurnover: 0,
    companyWebsite: "",
    listedStockExchange: "",
  });
  const [stock, setStock] = useState(undefined);

  useEffect(() => {
    updateCompany();
    updateStock();
  }, [companyCode]);

  useEffect(() => {
    if(stockPrice < 0.0001){
      return;
    }

    AddStockPriceAPI(companyCode, stockPrice)
      .then(() => {
        updateStock();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [stockPrice]);

  const updateStock = () => {
    let now = new Date().toJSON().slice(0, 10);
    GetStockInformationByCompany(companyCode, "1900-01-01", now)
      .then((c) => {
        console.log(c)
        setStock(c);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCompany = () => {
    GetSpecificCompanyAPI(companyCode)
      .then((c) => {
        setCompany(c);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (stock === undefined) {
      return;
    }

    const dateRange = [];
    const prices = [];

    stock?.companyDetails?.map((index) => {
      const dateArray = index.stockPriceDateTime;
      const stockPriceTime = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
      dateRange.push(new Date(stockPriceTime).toDateString());
    });

    const startAndEndDateRange = dateRange.filter((a, b) => {
      return Date.parse(a) > Date.parse(b);
    });


    const startDateLocal = startAndEndDateRange?.at(0)?.toString();
    const endDateLocal = new Date (new Date(startAndEndDateRange?.at(startAndEndDateRange?.length - 1)).getTime()+1000*60*60*24)?.toDateString();

    setStartDate(startDateLocal)
    setEndDate(endDateLocal)

    stock.companyDetails.filter(index => {
      const dateArray = index.stockPriceDateTime;
      const stockPriceTime = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
      if (stockPriceTime >= Date.parse(startDateLocal) && stockPriceTime.getDate() < new Date(endDateLocal).getDate() + 1)
          prices.push(index.stockPrice);
    });

    setPrices(prices)

  }, [stock]);


  return (
    <>
      <div className={"container"}>
        <StockChart
          stock={stock?.companyDetails}
          companyName={company.companyName}
          companyCode={companyCode}
        />
      </div>
      <div className={"dates"}>
        <h1>FROM </h1>
        <h2> {startDate}</h2>
        <h1>TO </h1>
        <h2> {endDate}</h2>
      </div>
      <div className={"avg"}>
        <h3>STOCK PRICES: </h3>
      </div>
      <div className={"avg"}>
        <h1>MINIMUM: </h1>
        <h2>${prices?.at(0)}</h2>
      </div>
      <div className={"avg"}>
        <h1>MAXIMUM: </h1>
        <h2>${prices?.at(prices?.length - 1)}</h2>
      </div>
      <div className={"avg"}>
        <h1>AVERAGE: </h1>
        <h2>
          $
          {(
            prices?.reduce((sum, curr) => sum + curr, 0) / prices?.length
          )?.toFixed(4)}
        </h2>
      </div>
    </>
  );
};

export default MarketDetails;
