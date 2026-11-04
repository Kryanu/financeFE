<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex space-x-2">
      <input class="p-2 bg-active-secondary text-gray-200 border border-secondary-gray outline-none focus:border-primary" v-model="ticker" />
      <button @click="handleRouter" class="p-2 bg-active-secondary text-primary border border-secondary-gray hover:border-primary cursor-pointer">
        Go to Company Score
      </button>
    </div>

    <Badge
      v-if="!!error"
      customClasses="w-fit px-4 bg-active-secondary border border-red-400 text-red-400 my-2"
      :text="error"
    />
    <div
      class="flex basis-full items-center justify-center mt-4 w-1/2"
    >
      <Card
        v-for="(item, index) in apiMethods"
        :action="item.action"
        :text="item.text"
        :title="item.title"
        :status="this.status"
        :key="index"
        @retrieveCompanyBalanceSheet="
          retrieveAppropriateData(ticker, 'balanceSheet')
        "
        @retrieveCompanyCashFlow="retrieveAppropriateData(ticker, 'cashFlow')"
        @retrieveCompanyIncomeStatement="
          retrieveAppropriateData(ticker, 'income')
        "
        :class="['m-4','bg-secondary', 'border', 'border-secondary-gray', 'w-full']"
      />
    </div>
    <Card
      action="retrieveAllDocuments"
      text="Retrieve Docs"
      title="Get All Statements"
      :status="this.status"
      @retrieveAllDocuments="retrieveAppropriateData(ticker, 'all')"
      class="bg-secondary border border-secondary-gray"
    />
  </div>
</template>
<!-- implement retrieve all docs and also company overview -->
<script>
import { mapActions } from 'pinia';
import { useApiStore } from '../../stores/counter';
import { Badge, Card } from '../atoms';
import { API_METHODS } from '../../constants';
export default {
  components: {
    Card,
    Badge,
  },
  data() {
    return {
      ticker: '',
      status: 'Idle',
      apiMethods: API_METHODS,
      error: undefined,
    };
  },
  methods: {
    ...mapActions(useApiStore, [
      'retrieveCompanyBalanceSheet',
      'retrieveCompanyCashFlow',
      'retrieveCompanyIncomeStatement',
    ]),
    async retrieveAppropriateData(ticker, type) {
      this.status = 'Loading...';
      let res = undefined;
      if (ticker.trim() === '') {
        this.error = 'Please Insert a ticker';
        this.handleError();
        return;
      }
      this.error = undefined;
      try {
        switch (type) {
          case 'balanceSheet':
            res = await this.retrieveCompanyBalanceSheet(ticker);

            break;
          case 'cashFlow':
            res = await this.retrieveCompanyCashFlow(ticker);
            break;
          case 'income':
            res = await this.retrieveCompanyIncomeStatement(ticker);
            break;
          case 'all':
            res = await this.retrieveCompanyBalanceSheet(ticker);
            this.handleSuccess(res.data);
            res = await this.retrieveCompanyCashFlow(ticker);
            this.handleSuccess(res.data);
            res = await this.retrieveCompanyIncomeStatement(ticker);
            break;
        }
        this.handleSuccess(res.data);
      } catch (ex) {
        this.handleError(ex);
      }
    },
    handleError(ex) {
      if (ex) {
        console.log(ex);
      }
      this.status = 'Failed';
    },
    handleSuccess(data) {
      console.log(data);
      this.status = 'Success!';
    },
    handleRouter() {
      if (this.ticker !== '') {
        this.$router.push({
          name: 'companyScore',
          params: {
            ticker: this.ticker,
          },
        });
      }
    },
  },
};
</script>
