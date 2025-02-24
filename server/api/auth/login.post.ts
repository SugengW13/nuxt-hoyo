import { handleAsync } from '~/server/utils/handle-async'
import { resultError, resultOK } from '~/server/utils/handle-response'

export default defineEventHandler(handleAsync(async (event) => {
  const body = await readBody(event)

  const cookies: string[] = body.cookies.split(';')

  const token = cookies.find(i => i.includes('cookie_token_v2'))?.split('=').pop()
  const uid = cookies.find(i => i.includes('ltuid_v2'))?.split('=').pop()

  if (!token || !uid) throw resultError(400, 'Invalid Cookies')

  setCookie(event, 'token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  })

  setCookie(event, 'uid', uid, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  })

  return resultOK(null)
}))
