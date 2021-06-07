<template>
  <div class="column-container">
    <Bar
      v-for="(column, index) in columns"
      :key="index"
      :height="column"
      :colorValue="column"
    />
  </div>
</template>

<script>
import Bar from "./Bar.vue";

export default {
  name: "BarContainer",
  components: { Bar },
  data() {
    return {
      columnCount: 100,
      columns: [],
      sortSpeed: 250, // In ms
    };
  },
  created() {
    this.generateColumns();
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    generateColumns() {
      this.columns = [];
      for (let i = 0; i < this.columnCount; i++) {
        this.columns.push(this.getRandomInt(100));
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async bubbleSort() {
      console.log("Sorting...");
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < this.columns.length; i++) {
          // Iterate over all columns
          if (this.columns[i] > this.columns[i + 1]) {
            // If current index of arr is greater than next element
            // swap the current index of arr with the next one
            let tmp = this.columns[i];
            this.columns[i] = this.columns[i + 1];
            this.columns[i + 1] = tmp;
            swapped = true;
            this.$forceUpdate();
            await this.sleep(this.sortSpeed);
          }
        }
      } while (swapped);
      console.log("Done!");
    },
    async selectionSort() {
      console.log("Sorting...");
      let n = this.columns.length;

      for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
          if (this.columns[j] < this.columns[min]) {
            min = j;
          }
        }
        if (min != i) {
          // Swapping the elements
          let tmp = this.columns[i];
          this.columns[i] = this.columns[min];
          this.columns[min] = tmp;
          this.$forceUpdate();
          await this.sleep(this.sortSpeed);
        }
      }
      console.log("Done!");
    },
    async insertionSort() {
      console.log("Sorting...");
      for (let i = 1; i < this.columns.length; i++) {
        let currentEl = this.columns[i];
        for (var j = i - 1; j >= 0 && this.columns[j] > currentEl; j--) {
          this.columns[j + 1] = this.columns[j];
          this.$forceUpdate();
          await this.sleep(this.sortSpeed);
        }
        this.columns[j + 1] = currentEl;
      }
      console.log("Done!");
    },
  },
};
</script>

<style scoped>
.column-container {
  display: flex;
}
</style>
