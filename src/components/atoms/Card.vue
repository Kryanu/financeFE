<template>
  <div class="p-8 rounded-md flex flex-col items-center">
    <Badge customClasses="bg-cyan-200 p-3 text-center h-1/3 w-fit" :text="title" /> 
    <button
      @click="emitFunc"
      class="bg-cyan-400 p-2 rounded-md m-2 drop-shadow-md h-1/3 w-full"
    >
      {{ text }}
    </button>
    <Badge :text="status" customClasses="bg-white h-1/3 w-fit" />
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
