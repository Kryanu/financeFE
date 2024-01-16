<template>
  <div class="flex flex-col w-full min-h-screen bg-pastel-orange">
    <div class="grid grid-cols-4 bg-sky-blue py-2">
      <div v-if="isShowBack" class="flex items-center col-start-1 col-end-2 ml-2 ">
        <button @click="goBack" class="text-lg px-4 py-2 rounded-md bg-ocean-blue text-cloud-white shadow-3xl active:shadow-lg leading-none"> Back</button>
      </div>
      <h1 class="col-start-3 col-end-4 text-center text-cloud-white text-3xl">
        {{ title }}
      </h1>
    </div>
    <div class="flex grow min-h-full">
      <div class="flex basis-1/4 flex-col bg-sea-blue space-y-2 pt-2">
        <FilterItem
          v-for="(filter, index) in filters"
          :text="filter"
          :isSelected="isSelected === index"
          @click="selectFilter(index)"
        />
      </div>
      <div class="basis-3/4 bg-pastel-orange">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterItem } from '../atoms';
import OverviewPane from '../molecules/OverviewPane.vue';
export default {
  components: {
    FilterItem,
    OverviewPane,
  },
  props: {
    title: {
      type: String,
      default: 'Hai there',
    },
    filters: {
      type: Array
    },
    isShowBack: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isSelected: undefined,
    };
  },
  methods: {
    selectFilter(index) {
      this.isSelected = index;
      this.$emit('listItemSelected', index);
    },
    goBack(){
      this.$router.back();
    }
  },
};
</script>
