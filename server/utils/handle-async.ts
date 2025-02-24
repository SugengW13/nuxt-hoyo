import type { EventHandler } from 'h3'
import { handleError } from '~/server/utils/handle-error'

export const handleAsync = (handler: EventHandler) => (
  defineEventHandler(async (event) => {
    try {
      const res = await handler(event)
      return { res }
    }
    catch (error: any) {
      throw handleError(error)
    }
  })
)
