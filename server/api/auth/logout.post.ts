export default defineEventHandler(async (event) => {
  try {
    const uid = getCookie(event, 'uid')
    const token = getCookie(event, 'token')

    if (!uid || !token) {
      // TODO: Return Unauthorized
    }

    setCookie(event, 'uid', '')
    setCookie(event, 'token', '')

    return {
      code: 200,
      success: true,
      message: 'Success',
      data: null,
    }
  }
  catch (e) {
    console.error(e)
  }
})
