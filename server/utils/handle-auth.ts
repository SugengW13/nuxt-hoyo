import type { H3Event } from 'h3'
import { resultUnauthorized } from './handle-response'

export function handleAuth(event: H3Event) {
  const uid = getCookie(event, 'uid')
  const token = getCookie(event, 'token')

  if (!uid || !token) throw resultUnauthorized()
}
