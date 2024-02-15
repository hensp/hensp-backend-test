import mysql from 'mysql2/promise'
import { config } from '../utils.js'

const connection = await mysql.createConnection(config)

export class MedicamentoModel {
  // get all
  static async getAll({ input }) {
    const [medicamento] = await connection.query(
      'select medicamento_id,nombre, proveedor, costo, precio_venta from Medicamentos;'
    )

    return medicamento
  }

  // create a new medicamento
  static async createMedicamento({ input }) {
    const { nombre, proveedor, costo, precioVenta } = input

    try {
      await connection.query(
        `insert into Medicamentos (nombre, proveedor, costo, precio_venta) values
        (?, ?, ?, ?);`,
        [nombre, proveedor, costo, precioVenta]
      )

      return 'Medicamento Creado'
    } catch (e) {
      throw new Error('Error creating medicamento', e)
    }
  }

  // update medicamento
  static async updateMedicamento({ id, input }) {
    try {
      let updateFields = []
      let queryParams = []

      const fieldsToUpdate = {
        nombre: 'nombre',
        proveedor: 'proveedor',
        costo: 'costo',
        precio_venta: 'precio_venta'
      }

      for (const [key, value] of Object.entries(input)) {
        if (value !== undefined && fieldsToUpdate[key]) {
          updateFields.push(`${fieldsToUpdate[key]} = ?`)
          queryParams.push(value)
        }
      }

      if (updateFields.length === 0) {
        throw new Error('No fields to update provided')
      }

      const updateQuery = `UPDATE Medicamentos SET ${updateFields.join(', ')} WHERE medicamento_id = ?`
      queryParams.push(id)

      await connection.query(updateQuery, queryParams)

      const [medicamento] = await connection.query(
        'select nombre, proveedor, costo, precio_venta from Medicamentos where medicamento_id = ?;',
        id
      )

      return medicamento[0]
    } catch (error) {
      throw new Error('Error updating user', error)
    }
  }

  // delete medicamento

  static async deleteMedicamento({ id }) {
    const [medicamento] = await connection.query('Delete from Medicamentos where medicamento_id=?;', id)

    if (medicamento.length === 0) return null

    return medicamento[0]
  }
}
