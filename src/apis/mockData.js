export const MOCK_COMPANY_SCORE = {
  companyName: 'AAPL',
  balanceSheet: {
    tests: {
      returnOnEquity: { value: 19.4, success: true },
      longTermDebt: { value: 2.2, success: true },
      retainedEarnings: { years: 5, consistency: true },
    },
  },
  cashFlow: {
    tests: {
      capExOnEarnings: { value: 0.81, success: true },
    },
  },
  incomeStatement: {
    tests: {
      grossProfitMarginAvg: { value: 43.2, success: true },
      netProfitMarginAvg: { value: 24.1, success: true },
      netProfit: { years: 4, consistency: false },
    },
  },
};

export const MOCK_COMPANIES = [
  { symbol: 'AAPL', score: 8.8 },
  { symbol: 'MSFT', score: 8.6 },
  { symbol: 'GOOGL', score: 8.1 },
  { symbol: 'NVDA', score: 7.9 },
  { symbol: 'AMZN', score: 7.7 },
];

export const MOCK_CLOSE_OVER_HIGH = {
  priceDistance: 7.4,
  success: true,
};

export const MOCK_BALANCE_SHEET = {
  ticker: 'AAPL',
  totalAssets: 352583,
  totalLiabilities: 290437,
  shareholderEquity: 62146,
};

export const MOCK_CASH_FLOW = {
  ticker: 'AAPL',
  operatingCashFlow: 110543,
  capitalExpenditure: -12987,
  freeCashFlow: 97556,
};

export const MOCK_INCOME_STATEMENT = {
  ticker: 'AAPL',
  revenue: 383285,
  grossProfit: 169148,
  netIncome: 96995,
};
