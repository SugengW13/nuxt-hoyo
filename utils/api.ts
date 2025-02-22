const api = {
  afterResponse: <T>(res: T): T => {
    // TODO: Validate API response

    return res
  },

  get: async <T>(
    url: string,
    option?: {
      query?: Record<string, boolean | number | string>
    },
  ): Promise<T> => {
    const res = await $fetch<T>(url, { method: 'GET', ...option })

    return api.afterResponse(res)
  },

  post: async <T>(
    url: string,
    option?: {
      body?: Record<string, boolean | number | string>
    },
  ): Promise<T> => {
    const res = await $fetch<T>(url, { method: 'POST', ...option })

    return api.afterResponse<T>(res)
  },

  put: async <T>(
    url: string,
    option?: {
      body?: Record<string, boolean | number | string>
    },
  ): Promise<T> => {
    const res = await $fetch<T>(url, { method: 'PUT', ...option })

    return api.afterResponse<T>(res)
  },

  delete: async <T>(url: string): Promise<T> => {
    const res = await $fetch<T>(url, { method: 'DELETE' })

    return api.afterResponse<T>(res)
  },
}

export default api
