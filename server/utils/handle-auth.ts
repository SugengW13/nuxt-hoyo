import type { H3Event } from 'h3'
import { resultUnauthorized } from './handle-response'

export function handleAuth(event: H3Event) {
  const cookieTokenV2 = process.env.COOKIE_TOKEN_V2
  const ltokenV2 = process.env.LTOKEN_V2
  const ltuidV2 = process.env.LTUID_V2

  if (!cookieTokenV2 || !ltokenV2 || !ltuidV2) {
    event.context.cookie = undefined
    throw resultUnauthorized()
  }

  event.context.cookie = `cookie_token_v2=${cookieTokenV2}; ltoken=${ltokenV2}; ltuid=${ltuidV2}`
}
