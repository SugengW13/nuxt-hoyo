export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    async login(cookies: string) {
      this.isLoading = true

      try {
        const res = await api.post('/api/auth/login', {
          body: { cookies },
        })

        if (res) navigateTo('/dashboard')
      }
      catch (e) {
        console.error(e)
        throw e
      }
      finally {
        this.isLoading = false
      }
    },

    async logout() {
      this.isLoading = true

      try {
        const res = await api.post('/api/auth/logout')
        if (res) navigateTo('/')
      }
      catch (e) {
        console.error(e)
        throw e
      }
      finally {
        this.isLoading = false
      }
    },
  },
})
