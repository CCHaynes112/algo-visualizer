<template>
  <div id="app">
    <div class="control-container">
      <input type="text" v-model="columnCount" />
      <button v-on:click="generateColumns()">Generate Columns</button>
      <button v-on:click="bubbleSort()">Bubble Sort</button>
    </div>
    <div class="column-container">
      <div
        v-for="(column, index) in columns"
        :key="index"
        class="column"
        :style="'height: ' + column + 'px; background-color: rgba(' + column + ', 0, ' + column + ', 1)'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      columnCount: 0,
      columns: [],
    };
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
    bubbleSort() {
      console.log("Sorting...");
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i] > this.columns[i + 1]) {
            let tmp = this.columns[i];
            this.columns[i] = this.columns[i + 1];
            this.columns[i + 1] = tmp;
            swapped = true;
            this.$forceUpdate();
          }
        }
      } while (swapped);
      console.log("Done!");
    },
  },
};
</script>

<style>
#app {
}
.control-container {
  padding: 15px 0 15px 0;
}
.column-container {
  display: flex;
}
.column {
  width: 10px;
  background-color: blue;
}
</style>
