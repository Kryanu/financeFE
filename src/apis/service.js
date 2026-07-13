import axios from 'axios';
import {
  MOCK_BALANCE_SHEET,
  MOCK_CASH_FLOW,
  MOCK_CLOSE_OVER_HIGH,
  MOCK_COMPANIES,
  MOCK_COMPANY_SCORE,
  MOCK_INCOME_STATEMENT,
} from './mockData';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
const API_MODE = (import.meta.env.VITE_API_MODE || 'live').toLowerCase();
const IS_MOCK_MODE = API_MODE === 'mock';

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

const createMockResponse = async (data) => {
  await delay();
  return { data };
};

const buildUrl = (path, params) => `${API_BASE_URL}${path}?${new URLSearchParams(params).toString()}`;

export const API = {
  getCompanyScore: async (companyName) => {
    if (IS_MOCK_MODE) {
      await delay();
      return {
        ...MOCK_COMPANY_SCORE,
        companyName,
      };
    }

    const res = await axios.get(
      buildUrl('/company/score', { companyName })
    );
    return res.data;
  },
  getCompanyIS: async (companyName) => {
    if (IS_MOCK_MODE) {
      return createMockResponse({
        ...MOCK_INCOME_STATEMENT,
        ticker: companyName,
      });
    }

    return await axios.get(buildUrl('/company/incomeStatement', { companyName }));
  },
  getBalanceSheet: async (companyName) => {
    if (IS_MOCK_MODE) {
      return createMockResponse({
        ...MOCK_BALANCE_SHEET,
        ticker: companyName,
      });
    }

    return await axios.get(buildUrl('/company/balanceSheet', { companyName }));
  },
  getCashFlow: async (companyName) => {
    if (IS_MOCK_MODE) {
      return createMockResponse({
        ...MOCK_CASH_FLOW,
        ticker: companyName,
      });
    }

    return await axios.get(buildUrl('/company/cashFlow', { companyName }));
  },
  getCompanies: async () => {
    if (IS_MOCK_MODE) {
      await delay();
      return MOCK_COMPANIES;
    }

    const res = await axios.get(`${API_BASE_URL}/company/companies`);
    return res.data;
  },
  getCloseOverHigh: async (companyName) => {
    if (IS_MOCK_MODE) {
      await delay();
      return {
        ...MOCK_CLOSE_OVER_HIGH,
        ticker: companyName,
      };
    }

    const res = await axios.get(
      buildUrl('/company/close-over-high', { ticker: companyName })
    );
    return res.data;
  },
};

export const apiMode = API_MODE;
