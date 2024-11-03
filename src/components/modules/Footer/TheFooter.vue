<script setup>
  const footerLinks = [
      'Услуги  и поддержка','Сервисы для бизнеса','Общая информация ','Защита бизнеса',
  ]
</script>

<template>
  <div class="the-footer bg-black-footer py-5">
    <div class="container flex justify-between flex-wrap gap-2">
      <div class="router-links flex gap-6 flex-wrap">
        <router-link
          v-for="link of footerLinks"
          :key="link"
          class="text-white"
          to="/"
        >
          {{ link }}
        </router-link>
      </div>
      <div>
        <a
          class="text-white mr-2"
          href="#"
        >service@in-line.ru</a>
        <a
          class="text-white"
          href="tel:8-800-200-74-30"
        > 8-800-200-74-30</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media (max-width: 910px) {
    .router-links{
      margin-bottom: 20px;
    }
    .the-footer > div {
      justify-content: center;
    }
  }
  @media (max-width: 650px) {
    .router-links {
      justify-content: center;
      max-width: 400px;
    }
  }
</style>