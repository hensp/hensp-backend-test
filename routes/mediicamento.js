import { Router } from 'express'
import { MedicamentoController } from '../controllers/medicamentos.js'

import { jsonwebtokenController } from '../jwt/jwt.js'

export const createMedicamentoRouter = ({ medicamentoModel }) => {
  const medicamentoRouter = Router()
  const medicamentoController = new MedicamentoController({ medicamentoModel })

  medicamentoRouter.get('/sendToken', jsonwebtokenController.sendToken)

  // Get all Users
  medicamentoRouter.get('/', jsonwebtokenController.authenticateJWT, medicamentoController.getAll)

  // create a new User
  medicamentoRouter.post('/', jsonwebtokenController.authenticateJWT, medicamentoController.createMedicamento)

  // update the User
  medicamentoRouter.patch('/:id', jsonwebtokenController.authenticateJWT, medicamentoController.updateMedicamento)

  // Delete a User
  medicamentoRouter.delete('/:id', jsonwebtokenController.authenticateJWT, medicamentoController.deleteMedicamento)

  return medicamentoRouter
}
