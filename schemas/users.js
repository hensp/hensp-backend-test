import z from 'zod'

const usersSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username title must be a string',
    required_error: 'Username title is required.'
  }),
  password: z.string(),
  nombre: z.string(),
  apellido: z.string(),
  correo: z.string().email()
})

export function validateUser(input) {
  return usersSchema.safeParse(input)
}

export function validatePartialUser(input) {
  return usersSchema.partial().safeParse(input)
}
