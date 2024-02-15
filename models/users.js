import mysql from 'mysql2/promise'
import { config } from '../utils.js'

const connection = await mysql.createConnection(config)

export class UserModel {
  static async getAll({ input }) {
    const [users] = await connection.query('SELECT * from Usuarios')

    return users
  }

  static async createUser({ input }) {
    const { username, password, nombre, apellido, correo } = input

    // crypto.randomUUID()
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `insert into Usuarios (user_id, username, password_hash, nombre, apellidos, correo) values
        (?, ?, ?, ?, ?, ?);`,
        [uuid, username, password, nombre, apellido, correo]
      )
    } catch (e) {
      // puede enviarle información sensible
      throw new Error('Error creating user', e)
      // enviar la traza a un servicio interno
      // sendLog(e)
    }

    const [users] = await connection.query(
      'SELECT  username, password_hash, nombre, apellidos, correo from Usuarios where user_id= ?;',
      uuid
    )

    return users[0]
  }

  static async updateUser({ id, input }) {
    try {
      let updateFields = []
      let queryParams = []

      const fieldsToUpdate = {
        username: 'username',
        password: 'password_hash',
        nombre: 'nombre',
        apellido: 'apellidos',
        correo: 'correo'
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

      const updateQuery = `UPDATE Usuarios SET ${updateFields.join(', ')} WHERE user_id = ?`
      queryParams.push(id)

      await connection.query(updateQuery, queryParams)

      const [users] = await connection.query(
        'SELECT user_id, username, password_hash, nombre, apellidos, correo FROM Usuarios WHERE user_id = ?;',
        id
      )

      return users[0]
    } catch (error) {
      throw new Error('Error updating user', error)
    }
  }

  static async deleteUser({ id }) {
    const [user] = await connection.query('Delete from Usuarios where user_id=?;', id)

    if (user.length === 0) return null

    return user[0]
  }
}
