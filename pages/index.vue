<script setup lang="ts">
const cookie = ref('')

const handleCopy = () => {
  navigator.clipboard.writeText(script)
  toast.success('Script Coppied')
}

const handleSubmit = () => {
  if (!cookie.value || cookie.value === '' || !cookie.value.includes('cookie_token_v2') || !cookie.value.includes('ltuid_v2')) {
    toast.error('Invalid Token')
    return
  }

  console.log(cookie.value)
}
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="space-y-10 w-[480px]">
      <p class="text-center text-4xl font-bold">
        Nuxt <span class="text-primary-600">Hoyo</span>
      </p>

      <form
        class="space-y-3"
        @submit.prevent="handleSubmit"
      >
        <div class="flex space-x-3">
          <u-button
            variant="outline"
            type="button"
            @click="handleCopy"
          >
            <template #leading>
              <u-icon
                name="material-symbols:content-copy-outline"
                class="w-4 h-4"
              />
            </template>
            Script
          </u-button>

          <u-input
            v-model="cookie"
            placeholder="Cookies"
            class="w-full"
          />
        </div>

        <u-button
          block
          type="submit"
        >
          Submit
        </u-button>
      </form>
    </div>
  </div>
</template>
