<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Bus from "./bus";
export default {
  name: "GoodTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: function(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    Bus.$emit("update:selected", this.selected);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
