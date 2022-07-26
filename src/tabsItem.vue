<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import Bus from "./bus";
export default {
  name: "GoodTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  mounted() {
    Bus.$on("update:selected", name => {
      name === this.name ? (this.active = true) : (this.active = false);
    });
  },
  methods: {
    xxx() {
      Bus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: red;
  }
}
</style>
