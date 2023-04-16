import axios from "axios";
import { BASE_URL_COMPANY, BASE_URL_STOCK } from "util/ApplicationConstants";


export const AddCompanyAPI =  async (company) => {
  try {
    return await axios
      .post(`${BASE_URL_COMPANY}/register`, company)
  } catch (err) {
    console.log(err)
    return err;
  }
};

export const AddStockPriceAPI = async (companycode, stockprice) => {
  try {
    return await axios
      .post(`${BASE_URL_STOCK}/add/${companycode}`, stockprice)
  } catch (err) {
    console.log(err);
  }
};

export const GetAllCompaniesAPI = async () => {
  try {
    return await axios.get(`${BASE_URL_COMPANY}/getall`).then((resp) => {
      return resp.data;
    });
  } catch (err) {
    console.log(err);
  }
};

export const DeleteSpecificCompanyAPI = async (companycode) => {
  try {
    return await axios.delete(`${BASE_URL_COMPANY}/delete/${companycode}`);
  } catch (err) {
    console.log(err);
  }
};

export const DeleteSpecificCompanyMarketEntryAPI = async (companyCode) => {
  try {
    return await axios.delete(`${BASE_URL_STOCK}/delete/${companyCode}`);
  } catch (err) {
    console.log(err);
  }
};

export const GetSpecificCompanyAPI = async (companyCode) => {
  try {
    return await axios.get(`${BASE_URL_COMPANY}/info/${companyCode}`).then((resp) => {
      return resp.data;
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetStockInformationByCompany = async (companycode, startdate, enddate) => {
  try {
    return await axios.get(`${BASE_URL_STOCK}/get/${companycode}/${startdate}/${enddate}`).then((resp) => {
      return resp.data;
    });
  } catch (err) {
    console.log(err);
  }
};
