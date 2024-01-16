<template>
  <div class="grid grid-cols-5 grid-rows-4 h-full">
    <SmallCard
      v-for="company in companies"
      @overview="pushToOverview"
      :ticker="company.symbol"
      :score="company.score"
      :class="topGridCss.farLeft"
    />
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useApiStore } from '../../stores/counter';
import { SmallCard } from '../atoms';
import { TOP_GRID_CSS, BOT_GRID_CSS, MID_GRID_CSS } from '../../constants';
export default {
  components: {
    SmallCard,
  },
  data() {
    return {
      topGridCss: TOP_GRID_CSS,
      botGrid: BOT_GRID_CSS,
      midGrid: MID_GRID_CSS,
      companies: [],
    };
  },
  async created() {
    this.companies = await this.retrieveCompanies();
  },
  methods: {
    ...mapActions(useApiStore, ['retrieveCompanies']),
    pushToOverview(ticker) {
      if (ticker !== '') {
        this.$router.push({
          name: 'companyScore',
          params: {
            ticker:ticker.trim()
          },
        });
      }
    },
  },
};
</script>
