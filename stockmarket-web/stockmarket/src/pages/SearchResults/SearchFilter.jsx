import React, { useEffect, useState, Fragment, useContext } from "react";
import SearchBar from "./SearchResults";
import { Table, TableBody, Popover } from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../components/table/styles";
import { GetAllCompaniesAPI } from "../../api/MarketAPI";
import { useNavigate } from "react-router-dom";
import {MarketContext} from "context/MarketContext";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const nav = useNavigate();
  const [cursor, setCursor] = useState("");
  const { setCompanyCode } = useContext(MarketContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const updateCode = (code) => {
    setCompanyCode(code);
  };

  useEffect(() => {
    GetAllCompaniesAPI()
      .then((companies) => setResults(companies))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSearchChange = (searchQuery) => {
    setSearch(searchQuery);
    setOpen(true);
  };

  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <Fragment>
      <SearchBar
        onMouseLeave={() => setOpen(false)}
        anchor={setAnchorEl}
        onSearch={onSearchChange}
        value={search}
      />
      {search !== "" && (
        <Popover
          disableEnforceFocus
          disableAutoFocus
          hideBackdrop
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          onMouseDown={() => setOpen(false)}
          open={open}
        >
          
            <Table>
              <TableBody>
                {results
                  .filter((index) => {
                    return index.companyName.toLowerCase().search(search) > -1;
                  })
                  .map((row) => (
                    <StyledTableRow key={row.companyCode}>
                      <StyledTableCell component="th" scope="row">
                        <h3
                          onClick={(e) => {
                            updateCode(row.companyCode);
                            nav(`/market`);
                          }}
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
          
        </Popover>
      )}
    </Fragment>
  );
};

export default SearchFilter;
