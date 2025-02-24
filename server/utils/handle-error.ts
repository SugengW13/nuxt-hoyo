export function handleError(error: any) {
  console.error(error)
  return createError({ ...error })
}
