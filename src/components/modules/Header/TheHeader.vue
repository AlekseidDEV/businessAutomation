<script setup>

import BaseBtn from "@/components/ui/BaseBtn.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

import {useRouter} from "vue-router";
import mainStore from "@/core/stores";

const router = useRouter()
const userRole = mainStore.userRole
</script>

<template>
  <div class="the-header">
    <div class="pt-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <BaseBtn
          class="px-3.5 py-2 text-base"
          color-btn="red-btn"
          @click="router.push({name: userRole === 'guest' ? 'login-page' : 'profile-page'})"
        >
          Личный кабинет
        </BaseBtn>
        <a
          href="#"
          class="font-bold"
        >
          Каталог услуг
        </a>
      </div>
      <div class="flex items-center gap-2">
        <span class="label-icon flex items-center justify-center">
          <BaseIcon
            :size-icon="{w: '13px', h: '20px'}"
            name="RocketSm"
          /></span>
        <p>Онлайн помощник</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label-icon{
  border-radius: 50%;
  background: #FE5F5F;
  height: 38.31px;
  width: 38.31px;
}

p {
  font-weight: 700;
  color: #FE5F5F;
}

@media (max-width: 460px) {
  p {
    display: none;
  }
}
</style>