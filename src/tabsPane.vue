<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
import Bus from "./bus";

export default {
  name: "GoodTabsPane",
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    Bus.$on("update:selected", name => {
      name === this.name ? (this.active = true) : (this.active = false);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tabs-pane {
}
</style>
