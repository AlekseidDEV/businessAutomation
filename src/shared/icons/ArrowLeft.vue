<script setup>
defineProps({
  size: {
    type: Object,
    required: true,
    default: () => {}
  },
  color: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <svg
    :width="size.w"
    :height="size.h"
    viewBox="0 0 16 8.63989"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      id="arrow"
      d="M12.01 3.23L0 3.23L0 5.39L12.01 5.39L12.01 8.63L16 4.31L12.01 0L12.01 3.23Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
  </svg>
</template>

<style scoped>

</style>