export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname
  const method = event.method

  const protectedRoutes: Record<string, string[]> = {
    GET: ['/api/hoyolab'],
    POST: [],
    PUT: [],
    DELETE: [],
  }

  if (protectedRoutes[method] && protectedRoutes[method].includes(path)) {
    handleAuth(event)
  }
})
