<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'GoodIcon',
  props: ['name'],
}
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  margin-top: 0.1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
