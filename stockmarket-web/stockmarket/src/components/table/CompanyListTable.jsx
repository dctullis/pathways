import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableHead,
  StyledPaper,
} from "./styles";
import "./CompanyListTable.scss";
import { useNavigate } from "react-router-dom";
import { MarketContext } from "../../context/MarketContext";

const CompanyListTable = ({ rows }) => {
  const nav = useNavigate();
  const [cursor, setCursor] = useState("");

  const { setCompanyCode } = useContext(MarketContext);

  const updateCode = (code) => {
    setCompanyCode(code);
    nav(`/market`);
  };

  return (
    <div className="page">
      <TableContainer component={StyledPaper} className={"table"}>
        <Table
          data-testid="listCompanyTable"
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          className={"table"}
        >
          <StyledTableHead className={"table"}>
            <TableRow className={"table"}>
              <StyledTableCell>Company Name</StyledTableCell>
              <StyledTableCell align="right">Company Code</StyledTableCell>
              <StyledTableCell align="right">Company CEO</StyledTableCell>
              <StyledTableCell align="right">Company Turnover</StyledTableCell>
              <StyledTableCell align="right">Company Website</StyledTableCell>
              <StyledTableCell align="right">Stock Exchange</StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.companyCode} className={"table"}>
                <StyledTableCell component="th" scope="row">
                  <h3
                    onClick={(e) => updateCode(row.companyCode)}
                    style={{ cursor: cursor }}
                    onMouseEnter={(e) => setCursor("pointer")}
                    onMouseLeave={(e) => setCursor("")}
                  >
                    <u>{row.companyName}</u>
                  </h3>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyCode}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyCEO}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyTurnover}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyWebsite}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.listedStockExchange}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyListTable;
