<script setup>
defineProps({
  colorBtn: {
    type: String,
    required: false,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>

<template>
  <button
    :class="colorBtn"
    class="base-btn font-normal"
    :disabled="isDisabled"
  >
    <slot name="default">
      default text
    </slot>
  </button>
</template>

<style scoped>

</style>