<template>
  <div class="flex flex-col w-full min-h-screen bg-pastel-orange">
    <div class="grid grid-cols-4 bg-sky-blue py-2">
      <h1 class="col-start-3 col-end-4 text-center text-cloud-white text-3xl">
        {{title}}
      </h1>
    </div>
    <div class="flex grow min-h-full">
      <div class="flex basis-1/4 flex-col bg-sea-blue space-y-2 pt-2" >
        <FilterItem v-for="(filter, index) in filters" :text="filter" :isSelected="isSelected === index" @click="selectFilter(index)"/>
      </div>
      <div class="basis-3/4 bg-pastel-orange">
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
    props: {
      title: {
        type: String,
        default: 'Hai there'
      },
      filters: {
        type: Array,
        default: OVERVIEW_FILTERS
      }
    },
    data(){
      return {
        isSelected: undefined
      }
    },
    methods: {
      selectFilter(index){
        this.isSelected = index;
      }
    }
    
};
</script>
