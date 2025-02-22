export default defineEventHandler(async (event) => {
  try {
    const uid = getCookie(event, 'uid')
    const token = getCookie(event, 'token')

    console.log(uid, token)

    return {
      code: 200,
      success: true,
      message: 'Success',
      data: null,
    }
  }
  catch (e) {
    console.log(e)
  }
})
