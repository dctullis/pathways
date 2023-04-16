import React, { useContext, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./StockChart.scss";
import { MarketContext } from "context/MarketContext";

const top = "top";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const StockChart = ({ stock, companyName, companyCode }) => {
  const { startDate, endDate } = useContext(MarketContext);

  useEffect(() => {
    console.log(stock)
  }, [stock])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: top,
      },
      title: {
        display: true,
        text: "Company Code: " + companyCode,
      },
    },
    maintainAspectRatio: true,
    borderWidth: 3,
  };

  const stockLabels = stock?.map((index) => {
    const dateArray = index.stockPriceDateTime;
    const stockPriceTime = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}T${dateArray[3] < 10 ? 0 : ''}${dateArray[3]}:${dateArray[4] < 10 ? 0 : ''}${dateArray[4]}:${dateArray[5] < 10 ? 0 : ''}${dateArray[5]}`);

    if (
      stockPriceTime >= Date.parse(startDate) &&
      stockPriceTime.getDate() < new Date(endDate).getDate() + 1
    ) { 
   
      return (
        stockPriceTime.toISOString().split("T")[0] +
        "   " +
        stockPriceTime.toLocaleTimeString()
      );
    }
  });

  const stockDatasets = [
    {
      id: 1,
      label: "Stock Price Overview for: " + companyName,
      data: 
      stock?.map((index) => {
        const dateArray = index.stockPriceDateTime;
        const stockPriceTime = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}T${dateArray[3] < 10 ? 0 : ''}${dateArray[3]}:${dateArray[4] < 10 ? 0 : ''}${dateArray[4]}:${dateArray[5] < 10 ? 0 : ''}${dateArray[5]}`);

    if (
      stockPriceTime >= Date.parse(startDate) &&
      stockPriceTime.getDate() < new Date(endDate).getDate() + 1
    ) {
      return index.stockPrice;
      }})
      ,
      borderColor: " #B28228",
      backgroundColor: "#FFE002",
    },
  ];

  const data = {
    labels: stockLabels,
    datasets: stockDatasets,
  };

  return (
    <div className={"ChartContainer"}>
      <Line options={options} data={data} />
    </div>
  );
};
