<template>
  <div class="flex flex-col w-full min-h-screen bg-black">
    <div class="grid grid-cols-4 bg-secondary border-b border-solid border-secondary-gray py-2">
      <h1 class="col-start-3 col-end-4 text-center text-primary text-3xl">
        {{title}}
      </h1>
    </div>
    <div class="flex grow min-h-full">
      <div class="flex basis-1/4 flex-col bg-secondary border-r border-solid border-secondary-gray space-y-2 pt-2" >
        <FilterItem v-for="(filter, index) in filters" :text="filter" :isSelected="isSelected === index" @click="selectFilter(index)"/>
      </div>
      <div class="basis-3/4 bg-black">
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
