<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
        disabled: this.disabled,
      };
    },
  },
  mounted() {
    Bus.$on("update:selected", name => {
      name === this.name ? (this.active = true) : (this.active = false);
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      Bus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    cursor: not-allowed;
    color: #ccc;
  }
}
</style>
