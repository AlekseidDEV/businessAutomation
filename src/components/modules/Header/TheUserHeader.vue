<script setup>

import BaseLogo from "@/components/ui/BaseLogo.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import {useRouter} from "vue-router";
import mainStore from "@/core/stores";

const router = useRouter()
const store = mainStore

const logout = () => {
  store.logoutUser()
  router.push({name: 'main-page'})
}

</script>

<template>
  <div class="the-user-header__wrapper py-4">
    <div class="container flex items-center gap-5 justify-between">
      <BaseLogo />
      <p
        class="text-lg font-bold flex items-center gap-2"
        @click="logout"
      >
        Выйти
        <BaseIcon
          :size-icon="{w: '18px', h: '18px'}"
          name="ExitProfile"
        />
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>