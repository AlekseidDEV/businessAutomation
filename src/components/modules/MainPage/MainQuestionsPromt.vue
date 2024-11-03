<script setup>

import BaseBtn from "@/components/ui/BaseBtn.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
</script>

<template>
  <div class="main-questions-promt__wrapper mt-36">
    <div class="container flex flex-col items-center justify-center h-full">
      <h2 class="font-bold text-center">
        Есть вопросы?
      </h2>
      <p class="text-center max-w-[263px] py-4">
        Задайте интересующие вас вопросы
        онлайн помощнику
      </p>
      <BaseBtn
        color-btn="red-btn"
        class="px-8 py-2"
      >
        <template #default>
          <span class="flex gap-3">
            <BaseIcon
              name="RocketSm"
              :size-icon="{w: '12.45px', h: '22.98px'}"
            />
            Онлайн помощник
          </span>
        </template>
      </BaseBtn>
    </div>
  </div>
</template>

<style scoped>
.main-questions-promt__wrapper{
  position: relative;
  z-index: 1;
  height: 300px;
}

.main-questions-promt__wrapper::after{
  position: absolute;
  content: '';
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url('/public/images/BubbleUpBg.png') no-repeat center/cover;
  top: 0;
  left: 0;
}

h2 {
  font-size: 40px;
  line-height: 111%;
}

@media (max-width: 414px) {
  h2 {
    font-size: 28px;
  }
}
</style>