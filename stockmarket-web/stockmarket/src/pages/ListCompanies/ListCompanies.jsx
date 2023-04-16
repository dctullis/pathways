import { MarketContext } from "context/MarketContext";
import React, { useContext, useEffect, useState } from "react";
import { GetAllCompaniesAPI } from "../../api/MarketAPI";
import CompanyListTable from "../../components/table/CompanyListTable";

const ListCompanies = () => {
  const [results, setResults] = useState([]);
  const { companyCode } = useContext(MarketContext);

  useEffect(() => {
    GetAllCompaniesAPI()
      .then((companies) => setResults(companies))
      .catch((error) => {
        console.log(error);
      });
  }, [companyCode]);

  return (
    <div className="page">
      <CompanyListTable rows={results} />
    </div>
  );
};

export default ListCompanies;
