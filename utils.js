import dotenv from 'dotenv'

// Cargar variables de entorno desde el archivo .env
dotenv.config()

export const config = {
  host: process.env.host,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  database: process.env.database
}
