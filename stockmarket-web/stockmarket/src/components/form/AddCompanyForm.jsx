import { InputLabel, Autocomplete, Button, Alert } from "@mui/material";
import { InputField, Dropdown } from "./styles";
import React, { useRef, useState } from "react";
import "./AddCompanyForm.scss";
import { stockExchanges } from "../../assets/exchanges";
import { AddCompanyAPI } from "../../api/MarketAPI";

const AddCompanyForm = () => {
  const [company, setCompany] = useState({
    companyCode: "",
    companyName: "",
    companyCEO: "",
    companyTurnover: 0,
    companyWebsite: "",
    listedStockExchange: "",
  });
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const updateCompany = (e) => {
    setCompany({
      ...company,
      [e.target.id]: e.target.value,
    });
  };

  const clear = (e) => {
    setCompany({
      companyCode: "",
      companyName: "",
      companyCEO: "",
      companyTurnover: 0,
      companyWebsite: "",
      listedStockExchange: "",
    });
  };

  const submit = async (e) => {
    setError("");
    const response = await AddCompanyAPI(company);
    if (response?.response?.data) {
      setError(response.response.data);
    }
  };

  return (
    <>
      <form ref={formRef}>
        <div>
          <InputLabel sx={{ color: "#F4F4F4" }}>Company Name</InputLabel>
          <InputField
            value={company.companyName}
            className={"field"}
            color="secondary"
            id="companyName"
            data-testid="companyName"
            aria-describedby="company-form-name-field"
            disableUnderline={true}
            onChange={updateCompany}
            required={true}
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}

          <InputLabel sx={{ color: "#F4F4F4" }}>Company Code</InputLabel>
          <InputField
            value={company.companyCode}
            className={"field"}
            color="secondary"
            id="companyCode"
            data-testid="companyCode"
            aria-describedby="company-form-code-field"
            disableUnderline={true}
            onChange={updateCompany}
            required={true}
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}

          <InputLabel sx={{ color: "#F4F4F4" }}>Company CEO</InputLabel>
          <InputField
            value={company.companyCEO}
            className={"field"}
            color="secondary"
            id="companyCEO"
            data-testid="companyCEO"
            aria-describedby="company-form-ceo-field"
            disableUnderline={true}
            onChange={updateCompany}
            required={true}
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <InputLabel sx={{ color: "#F4F4F4" }}>Company Turnover</InputLabel>
          <InputField
            value={company.companyTurnover}
            className={"field"}
            color="secondary"
            id="companyTurnover"
            data-testid="companyTurnover"
            aria-describedby="company-form-turnover-field"
            disableUnderline={true}
            onChange={updateCompany}
            required={true}
            type={"number"}
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}

          <InputLabel sx={{ color: "#F4F4F4" }}>Company Website</InputLabel>
          <InputField
            value={company.companyWebsite}
            className={"field"}
            color="secondary"
            id="companyWebsite"
            data-testid="companyWebsite"
            aria-describedby="company-form-website-field"
            disableUnderline={true}
            onChange={updateCompany}
            required={true}
          />
          <br />
          <br />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            data-testid="companyStockExchange"
            options={stockExchanges}
            sx={{ width: "96%" }}
            required={true}
            onChange={(e) =>
              setCompany({
                ...company,
                listedStockExchange: e.target.outerText,
              })
            }
            renderInput={(params) => (
              <Dropdown color="secondary" {...params} label="Stock Exchanges" />
            )}
          />
        </div>
      </form>
      <Button
        data-testid="addButton"
        className={"addButton"}
        onClick={(e) => {
          if (formRef.current.reportValidity()) {
            submit(e);
          } else {
            formRef.current.reportValidity();
          }
        }}
        variant="contained"
      >
        Add
      </Button>
      <Button
        data-testid="clearButton"
        className={"clearButton"}
        onClick={() => {
          clear();
          setError("");
        }}
        variant="contained"
      >
        Clear
      </Button>
      {error?.length > 0 && <Alert severity="error">{error}</Alert>}
    </>
  );
};

export default AddCompanyForm;
