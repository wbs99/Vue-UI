<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GoodSider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  width: 0;
}
</style>
