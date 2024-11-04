<script setup>
defineProps({
  img: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  text: {
    type: String,
    required: true,
    default: ''
  },
})
</script>

<template>
  <div class="advantage-card__wrapper max-w-[260px] w-full text-center">
    <img
      :src="img"
      alt="img"
      class="m-auto mb-1 max-h-[165px]"
    >
    <span>{{ title }}</span>
    <p class="mt-1 font-bold text-center text-xl">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
  span {
    font-weight: 700;
    font-size: 50px;
    color: #3865A7;
  }
</style>