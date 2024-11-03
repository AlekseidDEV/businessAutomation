<script setup>

import BaseBtn from "@/components/ui/BaseBtn.vue";
</script>

<template>
  <div class="main-questions__wrapper flex justify-center">
    <div class="container flex items-center flex-col">
      <h2 class="mb-7">
        Для начала работы ответьте на вопрос,
        есть ли у вас уже существующий бизнес?
      </h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <BaseBtn
          class="px-14 py-1.5 text-base sm:text-xl"
          color-btn="red-btn"
        >
          Да, у меня уже есть бизнес
        </BaseBtn>
        <BaseBtn
          class="px-14 py-1.5 text-base sm:text-xl"
          color-btn="blue-btn"
        >
          Нет, но планирую открыть
        </BaseBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-questions__wrapper{
  position: relative;
  z-index: 1;
  height: 378px;
}

.main-questions__wrapper::after{
  position: absolute;
  content: '';
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url('/public/images/BubbleDownBg.png') no-repeat center/cover;
  top: 0;
  left: 0;
}

h2{
  color: #2B2B2B;
  font-weight: 700;
  font-size: 30px;
  line-height: 111%;
  max-width: 552px;
  text-align: center;
}

@media (max-width: 414px) {
  h2 {
    font-size: 20px;
  }
}
</style>