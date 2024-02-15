import z from 'zod'

const medicamentosSchema = z.object({
  nombre: z.string(),
  proveedor: z.string(),
  costo: z.number(10, 2).min(0),
  precioVenta: z.number(10, 2).min(0)
})

export function validateMedicamento(input) {
  return medicamentosSchema.safeParse(input)
}
export function validatePartialMedicamento(input) {
  return medicamentosSchema.partial().safeParse(input)
}
