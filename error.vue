<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="border h-screen flex flex-col justify-center items-center">
    <div class="flex items-center space-x-5">
      <div class="bg-gray-200 h-[120px] w-[120px] aspect-square rounded-xl" />

      <div class="select-none">
        <h1 class="text-7xl font-bold text-primary-600">
          {{ props.error?.statusCode }}
        </h1>
        <p v-if="props.error?.statusMessage" class="text-xl font-medium text-gray-600">
          {{ props.error?.statusMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
