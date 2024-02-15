import { validateUser, validatePartialUser } from '../schemas/users.js'

export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const { input } = req.query
    const users = await this.userModel.getAll({ input })
    res.json(users)
  }

  // create a new user
  createUser = async (req, res) => {
    const result = validateUser(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newUser = await this.userModel.createUser({ input: result.data })

    res.status(201).json(newUser)
  }

  // update the user
  updateUser = async (req, res) => {
    const result = validatePartialUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updateUser = await this.userModel.updateUser({ id, input: result.data })

    return res.json(updateUser)
  }

  // delete a user
  deleteUser = async (req, res) => {
    const { id } = req.params

    const result = await this.userModel.deleteUser({ id })

    if (result === false) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json({ message: 'User deleted' })
  }
}
