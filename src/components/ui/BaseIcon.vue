<script setup>
import {computed, defineAsyncComponent} from "vue";

  const props = defineProps({
    name: {
      type: String,
      required: true,
      default: ''
    },
    sizeIcon: {
      type: Object,
      required: true,
      default: () => {}
    },
    colorIcon: {
      type: String,
      required: false,
      default: ''
    }
  })

  const dynamicComponent = computed(() => {
    return defineAsyncComponent(
        () => import((`@/shared/icons/${props.name}.vue`))
    )
  })
</script>

<template>
  <i class="base-icon">
    <component
      :is="dynamicComponent"
      :size="sizeIcon"
      :color="colorIcon"
    />
  </i>
</template>

<style scoped>

</style>