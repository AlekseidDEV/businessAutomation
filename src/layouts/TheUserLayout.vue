<script setup>

import TheFooter from "@/components/modules/Footer/TheFooter.vue";
import TheUserHeader from "@/components/modules/Header/TheUserHeader.vue";
</script>

<template>
  <div class="user-layout__wrapper h-dvh flex flex-col">
    <TheUserHeader />
    <router-view />
    <the-footer />
  </div>
</template>

<style scoped>

</style>