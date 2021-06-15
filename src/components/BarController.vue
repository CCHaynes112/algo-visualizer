<template>
  <div class="control-container">
    <div class="input-container">
      <v-text-field label="Element Count" v-model="barCount" />
      <v-text-field label="Sort Speed" v-model="sortSpeed" />
    </div>
    <div class="btn-container">
      <v-btn color="secondary" v-on:click="generateBars()"
        >Generate Elements</v-btn
      >
      <v-btn color="primary" v-on:click="bubbleSort()">Bubble Sort</v-btn>
      <v-btn color="primary" v-on:click="selectionSort()"
        >Selection Sort</v-btn
      >
      <v-btn color="primary" v-on:click="insertionSort()"
        >Insertion Sort</v-btn
      >
    </div>
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
  created() {
    this.generateBars();
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
            await sleep(this.sortSpeed);
          }
        }
        if (min != i) {
          // Swapping the elements
          let tmp = this.bars[i];
          let payload = { index: i, val: this.bars[min] };
          this.updateBar(payload);
          payload = { index: min, val: tmp };
          this.updateBar(payload);
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
        let payload = {index: j + 1, val: currentEl}
        this.updateBar(payload);
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
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 30vh;
  justify-content: space-around;
  padding: 15px 0 15px 0;
}

.btn-container {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.input-container {
}
</style>