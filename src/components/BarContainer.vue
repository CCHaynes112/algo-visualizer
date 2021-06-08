<template>
  <div class="bar-container">
    <Bar
      v-for="(bar, index) in bars"
      :key="index"
      :height="bar"
      :colorValue="bar"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Bar from "./Bar.vue";

export default {
  name: "BarContainer",
  components: { Bar },
  created() {
    // this.$store.dispatch("generateBars");
  },
  computed: { ...mapState("chart", ["bars"]) },
};
</script>

<style scoped>
.bar-container {
  display: flex;
}
</style>