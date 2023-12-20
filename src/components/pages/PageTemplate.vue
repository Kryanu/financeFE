<template>
  <div class="flex flex-col w-full min-h-screen bg-sea-blue">
    <div class="grid grid-cols-4 bg-sky-blue py-2">
      <h1 class="col-start-3 col-end-4 text-center text-cloud-white text-3xl">
        {{title}}
      </h1>
    </div>
    <div class="grid grid-cols-4 grid-rows-6 h-full">
      <div class="flex flex-col col-start-1 col-end-2 row-span-full bg-sea-blue h-full space-y-2 pt-2 mr-8" >
        <FilterItem v-for="filter in filters" :text="filter" />
      </div>
      <!-- Create Slot here to pass Overview Pane or ListItems -->
      <div class="bg-pastel-orange col-span-3 row-span-full">
        <!-- <OverviewPane /> -->
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterItem } from '../atoms';
import { OVERVIEW_FILTERS } from '../../constants'
import OverviewPane from '../molecules/OverviewPane.vue';
export default {
    components: {
        FilterItem,
        OverviewPane
    },
    data() {
        return {
            filters: OVERVIEW_FILTERS
        }
    },
    props: {
      title: {
        type: String,
        default: 'Hai there'
      },
      filters: {
        type: Array,
        default: OVERVIEW_FILTERS
      }
    }
    
};
</script>
