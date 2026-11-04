<template>
  <div class="p-8 flex flex-col items-center">
    <Badge customClasses="bg-active-secondary border border-secondary-gray text-primary p-3 text-center h-1/3 w-fit" :text="title" /> 
    <button
      @click="emitFunc"
      class="bg-active-secondary text-primary border border-secondary-gray hover:border-primary cursor-pointer p-2 m-2 h-1/3 w-full"
    >
      {{ text }}
    </button>
    <Badge :text="status" customClasses="bg-active-secondary border border-secondary-gray text-gray-200 h-1/3 w-fit" />
  </div>
</template>

<script>
import Badge from "./Badge.vue";
export default {
  components: { Badge },
  props: {
    title: { type: String },
    action: { type: String },
    text: { type: String },
    status: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    emitFunc() {
      this.$emit(this.action);
    },
  },
};
</script>
