<script setup>

</script>

<template>
  <div class="user-profile-card__wrapper my-20">
    <div class="profile-card flex items-center gap-5 shadow-2xl shadow-gray-400 p-3 rounded">
      <div class="w-full max-w-[120px] bg-orange-300 rounded-full p-2">
        <img
          src="/images/avatar.png"
          alt="img"
          class="rounded-full"
        >
      </div>
      <div>
        <h1 class="font-bold text-2xl">
          Рудыко Алексей Алексеевич
        </h1>
        <p class="underline">
          Fronted vue developer
        </p>

        <div class="mt-5">
          <p>тел: +79773764301</p>
          <p>email: alexDev@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    line-height: 100%;
  }

  @media (max-width: 414px) {
    .profile-card{
      flex-direction: column;
      text-align: center;
    }
  }
</style>