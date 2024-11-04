<script setup>

import {computed} from "vue";

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  type: {
    type: String,
    required: true,
    default: ''
  },
  error: {
    type: Boolean,
    required: false,
    default: false
  },
  errorMessage: {
    type: String,
    required: false,
    default: ''
  }
})

const emits  = defineEmits(['on-input'])

const model = defineModel()

const isError = computed(() => {
  return props.error ? 'border-red-400' : 'border-gray-200'
})

const changeValueInput = (e) => {
  emits('on-input', e.target.value)
}
</script>

<template>
  <label class="base-input">
    <p
      v-if="label"
      class="pl-2 mb-0.5 text-gray-500"
    >{{ label }}</p>
    <input
      v-model="model"
      class="py-3 pl-2 border-2 rounded-2xl outline-none w-full"
      :class="isError"
      :placeholder="placeholder"
      :type="type || 'text'"
      autocomplete="on"
      @input="changeValueInput"
    >
    <p
      v-if="error"
      class="pl-2 mt-0.5 text-red-400"
    >{{ errorMessage }}</p>
  </label>
</template>

<style>
</style>