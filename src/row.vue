<template>
  <div class="row" :style="rowStyle" :class="rowClass">
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
    align: {
      type: String,
      validator(value) {
        return ['top', 'center', 'right'].includes(value)
      },
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
  computed: {
    rowStyle() {
      let { gutter } = this
      return {
        marginRight: -gutter / 2 + 'px',
        marginLeft: -gutter / 2 + 'px',
      }
    },
    rowClass() {
      let { align } = this
      return align && `align-${align}`
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>
