<template>
  <PageTemplate title="Company Score" :filters="SCORE_FILTERS" :isShowBack="true">
    <template v-slot:content>
      <div v-if="!!companyScore" class=" p-4 rounded-md">
        <Badge
          :apiMapping="apiMapping"
          text="balanceSheetTests"
          customClasses="w-fit text-xl"
        />
        <ListItem
          :arrayData="balanceSheetTests"
          :objectData="companyScore.balanceSheet.tests"
        />

        <Badge
          :apiMapping="apiMapping"
          text="cashFlowTests"
          customClasses="w-fit text-xl"
        />
        <ListItem
          :arrayData="cashFlowTests"
          :objectData="companyScore.cashFlow.tests"
        />

        <Badge
          :apiMapping="apiMapping"
          text="incomeStatementTests"
          customClasses="w-fit text-xl"
        />
        <ListItem
          :arrayData="incomeStatementTests"
          :objectData="companyScore.incomeStatement.tests"
        />
        <Badge
          :apiMapping="apiMapping"
          text="priceTests"
          customClasses="w-fit text-xl"
        />
        <ListItem
          :arrayData="priceTests"
          :objectData="companyScore.priceTest"
        />
      </div>
      <div class="flex text-white" v-else-if="isLoading">
        <p>Data is loading...</p>
      </div>
      <div class="flex text-white" v-else>
        <p>An Error has occurred</p>
      </div>
    </template>
  </PageTemplate>
</template>

<script>
import { mapActions } from 'pinia';
import { useApiStore } from '../../stores/counter';
import { mapping, SCORE_FILTERS } from '../../constants';
import { ListItem, Badge } from '../atoms';
import PageTemplate from './PageTemplate.vue';
export default {
  components: {
    PageTemplate,
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
      SCORE_FILTERS
    };
  },
  async created() {
    this.isLoading = true;
    try {
      const companyScore = await this.retrieveCompanyScore(this.ticker);
      const priceTest = await this.retrieveCompanyCloseOverHigh(this.ticker);  
      this.companyScore = {
        ...companyScore,
        priceTest: {ath: {value: priceTest.priceDistance,success: priceTest.success}}
      }
    } catch (ex) {
      console.log(ex);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    balanceSheetTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.balanceSheet?.tests);
      }
      return [];
    },
    cashFlowTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.cashFlow?.tests) || [];
      }
      return [];
    },
    incomeStatementTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.incomeStatement?.tests) || [];
      }
      return [];
    },
    priceTests() {
      if (this.companyScore) {
        return Object.keys(this.companyScore?.priceTest) || []
      }
      return [];
    }
  },
  methods: {
    ...mapActions(useApiStore, ['retrieveCompanyScore', 'retrieveCompanyCloseOverHigh']),
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
