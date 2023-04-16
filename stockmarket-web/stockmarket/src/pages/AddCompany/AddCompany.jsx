import {
  Card,
  CardContent
} from "@mui/material";
import React from "react";
import "./AddCompany.scss";
import AddCompanyForm from "../../components/form/AddCompanyForm"
import img from "../../assets/add.svg"

const AddCompany = () => {
  return (
    <div className={"page"}>
      <div className={"grid"}>
        <h1>Register a Company</h1>
        <Card>
          <CardContent>
            <AddCompanyForm />
          </CardContent>
        </Card>
        <br/>
        <br/>
        <img src={img} alt="page not found" className="page-not-found-image" />
      </div>
    </div>
  );
};

export default AddCompany;
