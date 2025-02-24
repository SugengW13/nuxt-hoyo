import { handleAsync } from '~/server/utils/handle-async'
import { resultOK } from '~/server/utils/handle-response'

export default defineEventHandler(handleAsync(async (event) => {
  deleteCookie(event, 'uid')
  deleteCookie(event, 'token')

  return resultOK(null)
}))
