<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const $auth = useAuthStore()

const form = reactive({
  cookies: '',
})

const onClickCopy = () => {
  navigator.clipboard.writeText(script)
  toast.success('Script Coppied')
}

const onSubmit = async () => {
  await $auth.login(form.cookies)
}
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="space-y-10 w-[480px]">
      <nuxt-hoyo-logo class="text-center" />

      <u-form :schema="schema.login" :state="form" class="space-y-3" @submit="onSubmit">
        <div class="flex space-x-3 items-start">
          <u-button variant="outline" type="button" @click="onClickCopy">
            <template #leading>
              <u-icon name="material-symbols:content-copy-outline" class="w-4 h-4" />
            </template>
            Script
          </u-button>

          <u-form-group name="cookies" class="w-full">
            <u-input v-model="form.cookies" placeholder="Cookies" />
          </u-form-group>
        </div>

        <u-button block :loading="$auth.isLoading" type="submit">
          Submit
        </u-button>
      </u-form>
    </div>
  </div>
</template>
