<script setup lang="ts">
const PAGES = [
  { name: 'Home', route: '/' },
  { name: 'vue-flow', route: '/vue-flow' },
]
</script>

<template>
  <div class="flex flex-row">
    <div class="w-20 bg-black border border-gray-300 h-screen flex flex-col gap-4 pt-20 items-center">
      <div v-for="page in PAGES" :key="page.name" class="text-white hover:underline decoration-white cursor-pointer">
        <NuxtLink :to="page.route">
          {{ page.name }}
        </NuxtLink>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="h-20 w-full bg-black border" />
      <slot />
    </div>
  </div>
</template>
