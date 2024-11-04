<script setup>
import BaseForm from "@/components/widget/BaseForm.vue";

import {loginUser} from "@/core/api/loginUser";
import {useRouter} from "vue-router";

import mainStore from "@/core/stores";

import {ref} from "vue";
import BasePreloader from "@/components/ui/BasePreloader.vue";

const router = useRouter()
const store = mainStore

const phone = ref('')
const password = ref('')

const loginFormRef = ref(null)

const isLoad = ref(false)
const isFailure = ref(false)
const errorText = ref('')

const sendForm = () => {
  if (loginFormRef.value.isError()) return
  isLoad.value = true

  loginUser(phone.value, password.value, 201)
      .then((data) => {
        isLoad.value = false
        isFailure.value = !data.succes ? true : false
        errorText.value = data.message

        if(data.success){
          store.setUser()
          router.push({name: 'profile-page'})
        }
      })
      .catch((error) => {
        isLoad.value = false
        isFailure.value = true
        errorText.value = error.message
      })
}

</script>

<template>
  <div class="login-form__wrapper h-full flex items-center justify-center">
    <div
      class="py-20 bg-gray-50 shadow-xl rounded-lg relative"
      :class="isFailure ? 'shadow-red-500/20' : 'shadow-blue-500/20'"
    >
      <h1 class="font-bold text-4xl text-center">
        Вход в систему
      </h1>
      <BaseForm
        ref="loginFormRef"
        v-model:phone="phone"
        v-model:password="password"
        class="px-5 sm:px-20"
        :is-load="isLoad"
        :error-text="errorText"
        :is-error-form="isFailure"
        @submit.prevent="sendForm"
      />
      <BasePreloader v-if="isLoad" />
    </div>
  </div>
</template>

<style scoped>
.login-form__wrapper > div {
  width: 100%;
  max-width: 650px;
}

.preloader{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(128, 128, 128, 0.21);
  width: 100%;
  height: 100%;
}
</style>