<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodLayout",
  data() {
    return {
      layoutClass: {
        "layout-has-sider": false,
      },
    };
  },
  mounted() {
    this.$children.forEach(child => {
      if (child.$options.name === "GoodSider") {
        this.layoutClass["layout-has-sider"] = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.layout-has-sider {
    flex-direction: row;
  }
}
</style>
