import { defineStore } from 'pinia';
import { API } from '../apis/service';
export const useApiStore = defineStore('apiStore', {
  actions: {
    async retrieveCompanyScore(ticker) {
      return await API.getCompanyScore(ticker);
    },
    async retrieveCompanyIncomeStatement(ticker) {
      return await API.getCompanyIS(ticker);
    },
    async retrieveCompanyBalanceSheet(ticker) {
      return await API.getBalanceSheet(ticker);
    },
    async retrieveCompanyCashFlow(ticker) {
      return await API.getCashFlow(ticker);
    },
    async retrieveCompanies() {
      return await API.getCompanies();
    },
    async retrieveCompanyCloseOverHigh(ticker) {
      return await API.getCloseOverHigh(ticker);
    },
  },
});
