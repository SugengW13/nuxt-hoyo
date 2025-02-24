export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname
  const method = event.method

  const protectedRoutes: Record<string, string[]> = {
    GET: ['/api/auth/profile'],
    POST: ['/api/auth/logout'],
    PUT: [],
    DELETE: [],
  }

  if (protectedRoutes[method] && protectedRoutes[method].includes(path)) {
    handleAuth(event)
  }
})
