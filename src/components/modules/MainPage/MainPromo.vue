<script setup>

import BaseLogo from "@/components/ui/BaseLogo.vue";
import TheHeader from "@/components/modules/Header/TheHeader.vue";
</script>

<template>
  <div class="main-promo__wrapper bg-container">
    <div class="container">
      <TheHeader class="mb-16" />
      <BaseLogo />
      <h1 class="font-bold max-w-[576px] mt-11">
        Мой бизнес - цифровая платформа для тех, кто хочет открыть и развивать свой бизнес
      </h1>
    </div>
  </div>
</template>

<style scoped>
.bg-container {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 810px;
}

.bg-container::after{
  position: absolute;
  content: '';
  background: url("/public/images/promoBg.png") no-repeat center/cover;
  width: 2200px;
  height: 100%;
  top: 0;
  left: -290px;
  z-index: -1;
}

h1 {
  font-size: 35px;
  line-height: 112%;
}

@media (max-width: 1100px) {
  .bg-container{
    height: 650px;
  }
  .bg-container::after{
    width: 100%;
    height: 100%;
    left: 0;
  }
}

@media (max-width: 414px) {
  h1{
    font-size: 24px;
  }
}
</style>