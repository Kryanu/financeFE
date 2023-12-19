<template>
  <div class="p-4">
    <h1 class="text-white text-2xl">Company Score</h1>
    <div v-if="!!companyScore" class="bg-slate-500 p-4 rounded-md mt-4">
      <Badge
        :apiMapping="apiMapping"
        text="balanceSheetTests"
        customClasses="w-fit"
      />
      <ListItem
        :arrayData="balanceSheetTests"
        :objectData="companyScore.balanceSheet"
      />

      <Badge
        :apiMapping="apiMapping"
        text="cashFlowTests"
        customClasses="w-fit"
      />
      <ListItem
        :arrayData="cashFlowTests"
        :objectData="companyScore.cashFlow"
      />

      <Badge
        :apiMapping="apiMapping"
        text="incomeStatementTests"
        customClasses="w-fit"
      />
      <ListItem
        :arrayData="incomeStatementTests"
        :objectData="companyScore.incomeStatement"
      />
    </div>
    <div class="flex text-white" v-else-if="isLoading">
      <p>Data is loading...</p>
    </div>
    <div class="flex text-white" v-else>
      <p>An Error has occurred</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useApiStore } from '../../stores/counter';
import { mapping } from '../../constants';
import { ListItem, Badge } from '../atoms';
export default {
  components: {
    ListItem,
    Badge,
  },
  props: {
    ticker: { type: String },
  },
  data() {
    return {
      companyScore: undefined,
      apiMapping: mapping,
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    try {
      const res = await this.retrieveCompanyScore(this.ticker);
      this.companyScore = res.data;
    } catch (ex) {
      console.log(ex);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    balanceSheetTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.balanceSheet);
      }
      return [];
    },
    cashFlowTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.cashFlow) || [];
      }
      return [];
    },
    incomeStatementTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.incomeStatement) || [];
      }
      return [];
    },
  },
  methods: {
    ...mapActions(useApiStore, ['retrieveCompanyScore']),
    formatNumber(number) {
      return Math.round(number * 100) / 100;
    },
    formatValue(input) {
      if (this.isNumber(input)) {
        return this.formatNumber(input);
      } else if (input === 'true' || input === 'false') {
        return input[0].toUpperCase() + input.slice(1);
      } else {
        if (input?.consistency === true) {
          return 'Passed';
        } else {
          return `Failed By ${5 - input.years} Years`;
        }
      }
    },
    isNumber(value) {
      return typeof value === 'number';
    },
  },
};
</script>
