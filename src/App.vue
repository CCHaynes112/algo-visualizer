<template>
  <div>
    <div class="control-container">
      Column Count
      <input type="text" v-model="columnCount" />
      <br />
      Sort Speed
      <input type="number" v-model="sortSpeed" />
      <br />
      <button v-on:click="generateColumns()">Generate Columns</button>
      <button v-on:click="bubbleSort()">Bubble Sort</button>
      <button v-on:click="selectionSort()">Selection Sort</button>
      <button v-on:click="insertionSort()">Insertion Sort</button>
    </div>
    <BarContainer />
  </div>
</template>

<script>
import BarContainer from "./components/BarContainer.vue";

export default {
  name: "App",
  components: { BarContainer },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
.control-container {
  padding: 15px 0 15px 0;
}
</style>
