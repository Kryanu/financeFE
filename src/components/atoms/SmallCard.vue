<template>
  <div class="flex flex-col p-4 text-center space-y-2">
    <p>{{ ticker }}</p>
    <p>{{ score }}</p>
    <button
      @click="emitFunc"
      class="flex justify-center mx-auto px-4 py-2 rounded-md bg-ocean-blue text-cloud-white"
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
