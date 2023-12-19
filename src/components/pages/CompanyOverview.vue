<template>
  <div class="flex flex-col w-full min-h-screen bg-sea-blue">
    <div class="grid grid-cols-4 bg-sky-blue py-2">
      <h1 class="col-start-3 col-end-4 text-center text-cloud-white text-3xl">
        Companies Overview
      </h1>
    </div>
    <div class="grid grid-cols-4 grid-rows-6 h-full">
      <div class="flex flex-col col-start-1 col-end-2 row-span-full bg-sea-blue h-full space-y-2 pt-2 mr-8" >
        <FilterItem v-for="filter in filters" :text="filter" />
      </div>
      <div class="bg-pastel-orange col-span-3 row-span-full">
        <div class="grid grid-cols-5 gap-x-28 h-full">
            <SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SmallCard, FilterItem } from '../atoms';
import { OVERVIEW_FILTERS } from '../../constants'
export default {
    components: {
        SmallCard,
        FilterItem
    },
    data() {
        return {
            filters: OVERVIEW_FILTERS
        }
    },
    methods: {
        pushToOverview(ticker) {
            console.log(ticker)
        }
    }
};
</script>
