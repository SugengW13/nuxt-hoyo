export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const cookies: string[] = body.cookies.split(';')

    const token = cookies.find(i => i.includes('cookie_token_v2'))?.split('=').pop()
    const uid = cookies.find(i => i.includes('ltuid_v2'))?.split('=').pop()

    if (!token || !uid) {
      return createError({
        statusCode: 400,
        statusMessage: 'Invalid Cookies',
      })
    }

    setCookie(event, 'token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })

    setCookie(event, 'uid', uid, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })

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
