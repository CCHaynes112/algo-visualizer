<template>
  <div class="control-container">
    Element Count
    <v-text-field type="text" v-model="barCount" />
    <br />
    Sort Speed
    <v-text-field type="number" v-model="sortSpeed" />
    <br />
    <v-btn v-on:click="generateBars()">Generate Elements</v-btn>
    <v-btn v-on:click="bubbleSort()">Bubble Sort</v-btn>
    <v-btn v-on:click="selectionSort()">Selection Sort</v-btn>
    <v-btn v-on:click="insertionSort()">Insertion Sort</v-btn>
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
      this.clearBars();
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
    async selectionSort() {
      console.log("Sorting...");
      let initialArraylength = this.bars.length;

      for (let i = 0; i < initialArraylength; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < initialArraylength; j++) {
          if (this.bars[j] < this.bars[min]) {
            min = j;
          }
        }
        if (min != i) {
          // Swapping the elements
          let tmp = this.bars[i];
          let payload = { index: i, val: this.bars[min] };
          this.updateBar(payload);
          payload = { index: min, val: tmp };
          this.updateBar(payload);
          await sleep(this.sortSpeed);
        }
      }
      console.log("Done!");
    },
    async insertionSort() {
      console.log("Sorting...");
      for (let i = 1; i < this.bars.length; i++) {
        let currentEl = this.bars[i];
        for (var j = i - 1; j >= 0 && this.bars[j] > currentEl; j--) {
          let payload = { index: j + 1, val: this.bars[j] };
          this.updateBar(payload);
          await sleep(this.sortSpeed);
        }
        this.bars[j + 1] = currentEl;
      }
      console.log("Done!");
    },
    ...mapActions("chart", [
      "generateBar",
      "updateBar",
      "clearBars",
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