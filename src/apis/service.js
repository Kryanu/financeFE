import axios from 'axios';
export const API = {
  getCompanyScore: async (companyName) => {
    const res = await axios.get(
      `http://localhost:3000/company/score?companyName=${companyName}`
    );
    return res.data
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
  },
  getCompanies: async () => {
    const res = await axios.get(`http://localhost:3000/company/companies`);
    return res.data;
  },
  getCloseOverHigh: async (companyName) => {
    const res = await axios.get(
      `http://localhost:3000/company/close-over-high?ticker=${companyName}`
    );
    return res.data;
  },
  getCompanyStatements: async (companyName) => {
    return await axios.get(`http://localhost:3000/company/statements?ticker=${companyName}`);
  }
};
