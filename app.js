import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { createUserRouter } from './routes/users.js'
import { createMedicamentoRouter } from './routes/mediicamento.js'
import { config } from 'dotenv'
export const createApp = ({ userModel, medicamentoModel }) => {
  const app = express()
  app.disable('x-powered-by')
  app.use(json())
  app.use(corsMiddleware())

  app.get('/', (req, res) => {
    res.json({ mensaje: 'Hola mundo!' })
  })
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use('/users', createUserRouter({ userModel }))
  app.use('/medicamento', createMedicamentoRouter({ medicamentoModel }))

  const port = process.env.puerto ?? 1234

  app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
}
