import axios from 'axios';

// toggle to serve mockData below instead of hitting the real API
const isMock = true;

const mockData = {
  companies: [
    { symbol: 'AAPL', score: 8 },
    { symbol: 'MSFT', score: 9 },
    { symbol: 'GOOGL', score: 7 },
    { symbol: 'AMZN', score: 6 },
    { symbol: 'TSLA', score: 5 },
  ],
  companyScore: {
    balanceSheet: {
      tests: {
        longTermDebt: { consistency: true, years: 5 },
        retainedEarnings: 'true',
      },
    },
    cashFlow: {
      tests: {
        capExOnEarnings: 12.34,
        cashFlowTests: 'true',
      },
    },
    incomeStatement: {
      tests: {
        grossProfitMarginAvg: 45.6,
        netProfitMarginAvg: 12.3,
        netProfit: 'true',
      },
    },
  },
  closeOverHigh: { priceDistance: 8.42, success: true },
  incomeStatement: { revenue: 1000000, netIncome: 150000 },
  balanceSheet: { totalAssets: 5000000, totalLiabilities: 2000000 },
  cashFlow: { operatingCashFlow: 300000, freeCashFlow: 200000 },
};

const mockResponse = (data) => Promise.resolve({ data });

export const API = {
  getCompanyScore: async (companyName) => {
    if (isMock) {
      return mockData.companyScore;
    }
    const res = await axios.get(
      `http://localhost:3000/company/score?companyName=${companyName}`
    );
    return res.data
  },
  getCompanyIS: async (companyName) => {
    if (isMock) {
      return mockResponse(mockData.incomeStatement);
    }
    return await axios.get(
      `http://localhost:3000/company/incomeStatement?companyName=${companyName}`
    );
  },
  getBalanceSheet: async (companyName) => {
    if (isMock) {
      return mockResponse(mockData.balanceSheet);
    }
    return await axios.get(
      `http://localhost:3000/company/balanceSheet?companyName=${companyName}`
    );
  },
  getCashFlow: async (companyName) => {
    if (isMock) {
      return mockResponse(mockData.cashFlow);
    }
    return await axios.get(
      `http://localhost:3000/company/cashFlow?companyName=${companyName}`
    );
  },
  getCompanies: async () => {
    if (isMock) {
      return mockData.companies;
    }
    const res = await axios.get(`http://localhost:3000/company/companies`);
    return res.data;
  },
  getCloseOverHigh: async (companyName) => {
    if (isMock) {
      return mockData.closeOverHigh;
    }
    const res = await axios.get(
      `http://localhost:3000/company/close-over-high?ticker=${companyName}`
    );
    return res.data;
  },
};
