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
    if (this.$children.length === 0) {
      throw new Error("Tabs must have at least one child");
    }
    this.$children.map(vm => {
      if (vm.$options.name === "GoodTabsHead") {
        vm.$children.map(item => {
          if (
            item.$options.name === "GoodTabsItem" &&
            item.name === this.selected
          ) {
            Bus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
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
