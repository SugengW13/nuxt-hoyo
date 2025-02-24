export function handleError(error: any) {
  console.log(error)
  return createError({ ...error })
}
