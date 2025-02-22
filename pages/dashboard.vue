<script lang="ts" setup>
const handleLogout = async () => {
  await $fetch('/api/auth/logout', {
    method: 'POST',
  })

  navigateTo('/')
}
</script>

<template>
  <div>
    <nuxt-hoyo-logo />

    <u-button @click="handleLogout">
      Logout
    </u-button>
  </div>
</template>
