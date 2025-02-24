import { handleAsync } from '../utils/handle-async'
import { handleAuth } from '../utils/handle-auth'

export default defineEventHandler(handleAsync(async (event) => {
  await handleAuth(event)
}))
