<script setup>

import BaseBtn from "@/components/ui/BaseBtn.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

defineProps({
  reverseImg: {
    type: Boolean,
    required: false,
    default: false
  },
  imgPath: String,
  title: String,
  quote: String,
  text: String,
})
</script>

<template>
  <div class="success-history-card__wrapper max-w-[1000px] w-full">
    <div
      class="flex items-center justify-between gap-4"
      :class="reverseImg ? 'flex-row-reverse' : ''"
    >
      <img
        :src="imgPath"
        alt="img"
      >
      <div>
        <h3 class="font-bold text-2xl">
          {{ title }}
        </h3>
        <div class="quote-card flex items-center my-5 gap-3">
          <BaseIcon
            :size-icon="{w: '46px ', h: '32px'}"
            color-icon="#FE5F5F"
            name="CarvedArrow"
          />
          <p class="text-red-450 font-bold max-w-[517px]">
            {{ quote }}
          </p>
        </div>
        <p class="max-w-[567px]">
          {{ text }}
        </p>
        <BaseBtn
          color-btn="blue-btn"
          class="px-4 py-2.5 mt-5"
        >
          <template #default>
            <span class="flex items-center gap-3 text-sm">
              Читать историю
              <BaseIcon
                :size-icon="{w: '16px', h: '8.64px'}"
                name="ArrowLeft"
                color-icon="white"
              />
            </span>
          </template>
        </BaseBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
  p, span {
    line-height: 115%;
  }
  
  @media (max-width: 949px) {
    .success-history-card__wrapper > div {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .quote-card{
      flex-direction: column;
    }
  }
</style>