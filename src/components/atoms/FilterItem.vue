<template>
  <div
    class="flex items-center pl-8 text-shadow-md text-cloud-white text-2xl py-2 m-2 rounded-md hover:bg-alt-green hover:text-black hover:drop-shadow-xl"
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
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
}

.flex.items-center.pl-8:hover .dot {
  height: 10px;
  width: 10px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
}

.dot:hover {
  height: 10px;
  width: 10px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
}

.text-shadow-md:hover {
  text-shadow: none;
}
</style>
