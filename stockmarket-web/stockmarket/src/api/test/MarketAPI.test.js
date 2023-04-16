import {
  AddCompanyAPI,
  AddStockPriceAPI,
  DeleteSpecificCompanyAPI,
  DeleteSpecificCompanyMarketEntryAPI,
  GetAllCompaniesAPI,
  GetSpecificCompanyAPI,
  GetStockInformationByCompany,
} from "api/MarketAPI";
import axios from "axios";
import { BASE_URL_COMPANY, BASE_URL_STOCK } from "util/ApplicationConstants";
jest.mock("axios");

describe("Add Company API Call", () => {
  it("should call POST to the right location", () => {
    const token = { token: "xyz" };
    AddCompanyAPI(token);
    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL_COMPANY}/register`,
      token
    );
  });
});

describe("Add StockPrice API Call", () => {
  it("should call POST to the right location", async () => {
    const companyCode = "000";
    const stockPrice = "0.00";
    axios.post.mockResolvedValueOnce("SUCCESS");
    const result = await AddStockPriceAPI(companyCode, stockPrice);
    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL_STOCK}/add/${companyCode}`,
      stockPrice
    );
    expect(result).toEqual("SUCCESS");
  });
});

describe("Get All Companies API Call", () => {
  it("should call GET to the right location", async () => {
    await GetAllCompaniesAPI();
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL_COMPANY}/getall`);
  });
});

describe("Delete Specific Company API Call", () => {
  it("should call DELETE to the right location", () => {
    const companyCode = "000";
    DeleteSpecificCompanyAPI(companyCode);
    expect(axios.delete).toHaveBeenCalledWith(
      `${BASE_URL_COMPANY}/delete/${companyCode}`
    );
  });
});

describe("Delete Specific Company's Market Entry API Call", () => {
  it("should call DELETE to the right location", () => {
    const companyCode = "000";
    DeleteSpecificCompanyMarketEntryAPI(companyCode);
    expect(axios.delete).toHaveBeenCalledWith(
      `${BASE_URL_STOCK}/delete/${companyCode}`
    );
  });
});

describe("Get Specific Company API Call", () => {
  it("should call GET to the right location", () => {
    const companyCode = "000";
    GetSpecificCompanyAPI(companyCode);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL_COMPANY}/info/${companyCode}`
    );
  });
});

describe("Get Stock Information By Company API Call", () => {
  it("should call GET to the right location", () => {
    const companyCode = "000";
    const startDate = "2000-01-01";
    const endDate = "3000-01-01";
    GetStockInformationByCompany(companyCode, startDate, endDate);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL_STOCK}/get/${companyCode}/${startDate}/${endDate}`
    );
  });
});
