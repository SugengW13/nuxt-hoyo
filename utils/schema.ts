import { object, string } from 'yup'

export const schema = {
  login: object({
    cookies: string().required('Required'),
  }),
}
