<script setup>
import AdvantageCard from "@/components/ui/AdvantageCard.vue";
import AdvantageCardInfo from "@/utils/AdvantageCardInfo";

</script>

<template>
  <div class="main-advantage__wrapper mt-36">
    <div class="container">
      <h2 class="title title-dot m-auto">
        Преимущества
      </h2>
      <div class="card-items mt-16 flex items-start justify-around gap-2 flex-wrap">
        <AdvantageCard
          v-for="card of AdvantageCardInfo"
          :key="card.id"
          :title="card.title"
          :text="card.text"
          :img="card.imgPath"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title{
    font-weight: 700;
    font-size: 40px;
    position: relative;
    text-align: center;
    line-height: 100%;
    max-width: 268px;
  }

  @media (max-width: 414px) {
    .title {
      font-size: 28px;
      max-width: 190px;
    }
  }
</style>