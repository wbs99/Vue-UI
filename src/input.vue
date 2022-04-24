<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      type="text"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />

    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon.vue'
export default {
  name: 'GoodInput',
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #d9d9d9;
$border-color-hover: #1890ff;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: #40a9ff;
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: 0 0 4px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
