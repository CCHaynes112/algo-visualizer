<template>
  <div>
    <BarController />
    <BarContainer />
  </div>
</template>

<script>
import BarController from "./components/BarController.vue";
import BarContainer from "./components/BarContainer.vue";

export default {
  name: "App",
  components: { BarController, BarContainer },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
</style>
