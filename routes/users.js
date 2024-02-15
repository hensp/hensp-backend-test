import { Router } from 'express'
import { UserController } from '../controllers/users.js'
import { jsonwebtokenController } from '../jwt/jwt.js'

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router()

  const userController = new UserController({ userModel })

  userRouter.get('/sendToken', jsonwebtokenController.sendToken)

  // Get all Users
  userRouter.get('/', jsonwebtokenController.authenticateJWT, userController.getAll)

  // create a new User
  userRouter.post('/', jsonwebtokenController.authenticateJWT, userController.createUser)

  // update the User
  userRouter.patch('/:id', jsonwebtokenController.authenticateJWT, userController.updateUser)

  // Delete a User
  userRouter.delete('/:id', jsonwebtokenController.authenticateJWT, userController.deleteUser)

  return userRouter
}
