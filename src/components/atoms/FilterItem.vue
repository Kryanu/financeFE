<template>
  <div
    class="flex items-center pl-8 text-gray-200 text-2xl py-2 m-2 cursor-pointer hover:bg-primary hover:text-black"
  >
    <p>{{ text }}</p>
    <span v-if="isSelected" class="dot ml-auto mr-4 text-2xl"></span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isSelected: Boolean,
  },
};
</script>

<style scoped>
.dot {
  height: 10px;
  width: 10px;
  background-color: currentColor;
  border-radius: 50%;
  display: inline-block;
}
</style>
