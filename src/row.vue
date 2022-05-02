<template>
  <div class="row" :style="{ marginRight: -gutter / 2 + 'px', marginLeft: -gutter / 2 + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GoodRow',
  props: {
    gutter: {
      type: Number | String,
    },
  },
  data() {
    return {}
  },

  mounted() {
    this.$children.map(vm => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
