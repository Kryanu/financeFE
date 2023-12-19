import axios from "axios";
export const API = {
  getCompanyScore: async (companyName) => {
    return await axios.get(
      `http://localhost:3000/company/score?companyName=${companyName}`
    );
  },
  getCompanyIS: async (companyName) => {
    return await axios.get(
      `http://localhost:3000/company/incomeStatement?companyName=${companyName}`
    );
  },
  getBalanceSheet: async (companyName) => {
    return await axios.get(
      `http://localhost:3000/company/balanceSheet?companyName=${companyName}`
    );
  },
  getCashFlow: async (companyName) => {
    return await axios.get(
      `http://localhost:3000/company/cashFlow?companyName=${companyName}`
    );
  }
};
