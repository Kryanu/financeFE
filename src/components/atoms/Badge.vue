<template>
  <div
    :class="['p-2 rounded-md drop-shadow-md flex justify-center', classes]"
  >
    <h1 class="underline">{{ mappedText }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    apiMapping: { type: Object },
    text: { type: String },
    customClasses: { type: String },
  },
  computed: {
    mappedText() {
      return !!this.apiMapping ? this.apiMapping[this.text] : this.text;
    },
    classes() {
      return this.customClasses || 'w-full';
    },
  },
};
</script>
