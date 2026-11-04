<template>
  <div
    v-for="(item, index) in arrayData"
    :key="index"
    class="flex mr-auto bg-active-secondary border border-secondary-gray p-4 m-2 text-gray-200"
  >
    <div class="flex justify-between w-full text-xl">
      <p class="text-gray-200">{{ apiMapping[`${item}`] }}</p>
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
      return item ? 'text-primary' : 'text-red-400';
    },
  },
};
</script>
