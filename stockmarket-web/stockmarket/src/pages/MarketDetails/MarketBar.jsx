import React, { useState, useEffect, useContext } from "react";
import {
  MenuItem,
  FormControl,
  Collapse,
  IconButton,
  Alert,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  GetAllCompaniesAPI,
  DeleteSpecificCompanyMarketEntryAPI,
  DeleteSpecificCompanyAPI,
} from "../../api/MarketAPI";
import { Dropdown, MUILabel, Field } from "./styles";
import "./MarketBar.scss";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {MarketContext} from "context/MarketContext";

const MarketBar = () => {
  const nav = useNavigate();
  const [results, setResults] = useState([]);
  const { companyCode, setCompanyCode, startDate, setStartDate, endDate, setEndDate, setStockPrice} = useContext(MarketContext)
  const [code, setCode] = useState(companyCode);
  const [newStockPrice, setNewStockPrice] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    GetAllCompaniesAPI()
      .then((companies) => setResults(companies))
      .catch((error) => {
        //update
        console.log(error);
      });
      console.log(new Date(startDate))
  }, []);

  const handleChange = (value) => {
    setCode(value);
    setCompanyCode(value);
  };

  const removeCompany = () => {
    DeleteSpecificCompanyAPI(companyCode);
    DeleteSpecificCompanyMarketEntryAPI(companyCode);
    setCompanyCode("");
    nav(`/`);
  };

  const addStockPrice = () => {
    if (newStockPrice.match(/^-?\d+\.?\d*$/)) {
      setStockPrice(newStockPrice);
      setNewStockPrice("");
    } else setOpen(true);
  };

  return (
    <div className="page">
      <h1>Adjustment Information</h1>
      <FormControl fullWidth>
        <MUILabel id="demo-simple-select-label">Company</MUILabel>
        <Dropdown
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={code}
          label="Company"
          onChange={(e) => handleChange(e.target.value)}
          data-testid="companyDropdown"
        >
          {results.map((item, index) => (
            <MenuItem key={index} value={item.companyCode}>
              {item.companyName}
            </MenuItem>
          ))}
        </Dropdown>
      </FormControl>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Start Date"
          value={new Date(startDate)}
          onChange={(newValue) => {
            setStartDate(newValue.toDateString());
          }}
          data-testid="startDateDatepicker"
          renderInput={(params) => (
            <Field style={{ marginLeft: "5vw" }} fullWidth {...params} />
          )}
        />
      </LocalizationProvider>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue.toDateString());
          }}
          data-testid="endDateDatepicker"
          renderInput={(params) => (
            <Field fullWidth style={{ marginLeft: "5vw" }} {...params} />
          )}
        />
      </LocalizationProvider>
      <br />
      <Card className={"card"}>
        <CardContent>
          <h2>Add a New Stock Price</h2>
          <Collapse in={open}>
            <Alert
              className={"alert"}
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="medium"
                  onClick={() => {
                    setOpen(false);
                  }}
                  data-testid="stockPriceButton"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              ERROR: You must enter a valid number.
            </Alert>
          </Collapse>
          <Field
            value={newStockPrice}
            className={"cardContent"}
            color="secondary"
            id="stockPrice"
            aria-describedby="stock-price-field"
            onChange={(e) => setNewStockPrice(e.target.value)}
            placeholder={"New Stock Price"}
          />
          <Button
            disabled={open}
            className={"btn"}
            variant="contained"
            onClick={() => {
              addStockPrice();
            }}
            data-testid="stockPriceButtonAdd"
          >
            Submit
          </Button>
        </CardContent>
      </Card>
      <br />
      <Button
        disabled={open}
        className={"delete"}
        variant="contained"
        onClick={() => {
          removeCompany();
        }}
        endIcon={<DeleteForeverIcon />}
      >
        Remove the Company
      </Button>
    </div>
  );
};

export default MarketBar;
