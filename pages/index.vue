<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const $auth = useAuthStore()

const cookies = ref('')

const handleCopy = () => {
  navigator.clipboard.writeText(script)
  toast.success('Script Coppied')
}

const handleSubmit = async () => {
  if (!cookies.value || cookies.value === '') {
    toast.error('Empty Token')
    return
  }

  if (!cookies.value.includes('cookie_token_v2') || !cookies.value.includes('ltuid_v2')) {
    toast.error('Invalid Token')
    return
  }

  await $auth.login(cookies.value)
}
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="space-y-10 w-[480px]">
      <nuxt-hoyo-logo class="text-center" />

      <form class="space-y-3" @submit.prevent="handleSubmit">
        <div class="flex space-x-3">
          <u-button variant="outline" type="button" @click="handleCopy">
            <template #leading>
              <u-icon name="material-symbols:content-copy-outline" class="w-4 h-4" />
            </template>
            Script
          </u-button>

          <u-input v-model="cookies" placeholder="Cookies" class="w-full" />
        </div>

        <u-button block :loading="$auth.isLoading" type="submit">
          Submit
        </u-button>
      </form>
    </div>
  </div>
</template>
