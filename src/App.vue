<template>
  <v-app light class="app">
    <BarContainer class="container" />
    <BarController class="controller" />
  </v-app>
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
.app {
  background-color: #fafafa !important;
}
.controller {
}
.container {
}
</style>
