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
    viewBox="0 0 45.6745 32"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      id="Vector"
      d="M7.11 32L0.03 24.9L7.11 17.81L14.2 24.9L7.11 32Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M16.01 23.13L8.92 16.04L16.01 8.95L23.09 16.04L16.01 23.13Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M7.08 14.18L0 7.09L7.08 0L14.17 7.09L7.08 14.18Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M29.69 32L22.6 24.9L29.69 17.81L36.78 24.9L29.69 32Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M38.58 23.13L31.5 16.04L38.58 8.95L45.67 16.04L38.58 23.13Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Vector"
      d="M29.66 14.18L22.57 7.09L29.66 0L36.74 7.09L29.66 14.18Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
</template>

<style scoped>

</style>