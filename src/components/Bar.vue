<template>
  <div class="column" :style="style"></div>
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
        "height: " + this.height + "px; background-color: rgb(" + this.colorValue + ", " + this.colorValue + ", 100);"
      );
    },
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.column {
    width: 20px;
}
</style>