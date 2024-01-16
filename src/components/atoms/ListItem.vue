<template>
  <div
    v-for="(item, index) in arrayData"
    :key="index"
    class="flex mr-auto bg-ocean-blue p-4 m-2 rounded-md text-white drop-shadow-md"
  >
    <div class="flex justify-between w-full text-xl">
      <p class="text-cloud-white">{{ apiMapping[`${item}`] }}</p>
      <p :class="isPassClass(objectData[item].success)">
        {{ formatValue(objectData[`${item}`]?.value) }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapping } from '../../constants';
import { capitalize } from 'lodash';
export default {
  props: {
    arrayData: { type: Array },
    objectData: { type: Object },
  },
  data() {
    return {
      apiMapping: mapping,
    };
  },
  methods: {
    formatNumber(number) {
      return Math.round(number * 100) / 100;
    },
    formatValue(input) {
      if (input !== undefined) {
        if (this.isNumber(input)) {
          return this.formatNumber(input);
        } else if (input === true || input === false) {
          return `${capitalize(input)}`;
        } else {
          if (input?.consistency === true) {
            return 'Passed';
          } else {
            return `Failed By ${5 - input.years} Years`;
          }
        }
      } else {
        return 'NaN'
      }
    },
    isNumber(value) {
      return typeof value === 'number';
    },
    isPassClass(item) {
      return item ? 'text-green-300' : 'text-red-300';
    },
  },
};
</script>
