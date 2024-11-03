<script setup>

import SuccessHistoryCard from "@/components/ui/SuccessHistoryCard.vue";
import SuccessHistoryCardInfo from "@/utils/SuccessHistoryCardInfo";
</script>

<template>
  <div class="main-history-success__wrapper mt-36">
    <h2 class="title-dot m-auto mb-16 text-center font-bold">
      Истории успеха
    </h2>
    <div class="container flex flex-col items-center gap-y-14">
      <SuccessHistoryCard
        v-for="card of SuccessHistoryCardInfo"
        :key="card"
        :reverse-img="card.reverse"
        :img-path="card.img"
        :title="card.title"
        :quote="card.quote"
        :text="card.text"
      />
    </div>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 40px;
    position: relative;
    max-width: 287px;
  }

  @media (max-width: 414px) {
    h2 {
      font-size: 28px;
      max-width: 210px;
    }
  }
</style>