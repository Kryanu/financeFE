<template>
  <div class="flex flex-col p-4 text-center space-y-2 border-secondary-gray justify-center">
    <p class="text-primary">{{ ticker }}</p>
    <p>{{ score }}</p>
    <button
      @click="emitFunc"
      class="flex justify-center mx-auto px-4 py-2 bg-active-secondary text-primary border border-secondary-gray hover:border-primary cursor-pointer"
    >
      Overview
    </button>
  </div>
</template>

<script>
export default {
  props: {
    ticker: String,
    score: String,
  },
  methods: {
    emitFunc() {
      this.$emit('overview', this.ticker);
    },
  },
};
</script>
