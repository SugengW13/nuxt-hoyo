import type { EventHandler } from 'h3'
import { handleError } from '~/server/utils/handle-error'

export const handleAsync = (handler: EventHandler) => (
  defineEventHandler(async (event) => {
    try {
      return await handler(event)
    }
    catch (error: HoyolabError) {
      throw handleError(error)
    }
  })
)
