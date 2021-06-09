<template>
  <div class="control-container">
    Element Count
    <input type="text" v-model="barCount" />
    <br />
    Sort Speed
    <input type="number" v-model="sortSpeed" />
    <br />
    <button v-on:click="generateBars()">Generate Elements</button>
    <button v-on:click="bubbleSort()">Bubble Sort</button>
    <button v-on:click="selectionSort()">Selection Sort</button>
    <button v-on:click="insertionSort()">Insertion Sort</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import sleep from "../utils/sleep";

export default {
  name: "BarController",
  computed: {
    sortSpeed: {
      get() {
        return this.$store.state.chart.sortSpeed;
      },
      set(value) {
        this.updateSortSpeed(value);
      },
    },
    barCount: {
      get() {
        return this.$store.state.chart.barCount;
      },
      set(value) {
        this.updateBarCount(value);
      },
    },
    ...mapGetters("chart", ["bars"]),
  },
  methods: {
    generateBars() {
      for (let i = 0; i < this.barCount; i++) {
        this.generateBar();
      }
    },
    async bubbleSort() {
      console.log("Sorting...");
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < this.barCount; i++) {
          if (this.bars[i] > this.bars[i + 1]) {
            let tmp = this.bars[i];
            let payload = { index: i, val: this.bars[i + 1] };
            this.updateBar(payload);
            payload = { index: i + 1, val: tmp };
            this.updateBar(payload);
            swapped = true;
            await sleep(this.sortSpeed);
          }
        }
      } while (swapped);
      console.log("Done!");
    },
    ...mapActions("chart", [
      "generateBar",
      "updateBar",
      "updateBarCount",
      "updateSortSpeed",
    ]),
  },
};
</script>

<style scoped>
.control-container {
  padding: 15px 0 15px 0;
}
</style>