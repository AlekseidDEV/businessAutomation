<script setup>

import BaseInput from "@/components/ui/BaseInput.vue";
import BaseBtn from "@/components/ui/BaseBtn.vue";

import {regexpKit, validateByRegexp} from "@/utils/validateRegexp";

import {ref} from "vue";

defineProps({
  isLoad: {
    type: Boolean,
    required: true,
    default: false
  },
  isErrorForm: {
    type: Boolean,
    required: false,
    default: false
  },
  errorText: {
    type: String,
    required: false,
    default: ''
  }
})

const emailModel = defineModel('phone')
const passwordModel = defineModel('password')

const emailHasError = ref(false)
const passwordHasError = ref(false)

const validateEmail = (val = emailModel.value) => {
  emailHasError.value = !validateByRegexp(val, regexpKit.email)
}

const validatePassword = (val = passwordModel.value) => {
  if(!!val && val.length >= 8){
    passwordHasError.value = false
  }else {
    passwordHasError.value = true
  }
}

const isError = () => {
  const isValidate = passwordHasError.value || emailHasError.value
  const isNullValue = !!emailModel.value && !!passwordModel.value

  validateEmail()
  validatePassword()

  return !(!isValidate && isNullValue)
}

defineExpose({
  isError
})
</script>

<template>
  <form
    class="base-form__wrapper flex items-center flex-col"
  >
    <div class="mt-8 mb-10 flex flex-col gap-y-4 w-full">
      <BaseInput
        v-model="emailModel"
        placeholder="Example: john@mail.su"
        label="Email"
        type="email"
        :error="emailHasError || isErrorForm"
        :error-message="isErrorForm ? '' : 'ошибка заполнения'"
        @on-input="validateEmail"
      />
      <BaseInput
        v-model="passwordModel"
        placeholder="введите пароль"
        label="Пароль"
        type="password"
        :error="passwordHasError || isErrorForm"
        :error-message="isErrorForm ? '' : 'ошибка заполнения'"
        @on-input="validatePassword"
      />
      <p
        v-if="isErrorForm"
        class="text-red-400 text-center"
      >
        {{ errorText }}
      </p>
    </div>
    <BaseBtn
      color-btn="blue-btn"
      class="px-10 py-2.5"
      :is-disabled="isLoad"
    >
      Войти
    </BaseBtn>
  </form>
</template>

<style scoped>

</style>