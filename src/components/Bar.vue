<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
    <div v-on="on" v-bind="attrs" class="bar" :style="style"></div>
    </template>
    <span>{{ height }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "Bar",
  props: {
    height: Number,
    colorValue: Number,
  },
  computed: {
    style() {
      return (
        "height: " +
        this.height +
        "px; background-color: rgb(100, " +
        this.colorValue +
        ", 150);"
      );
    },
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.bar {
  width: 20px;
}
</style>