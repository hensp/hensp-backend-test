import { validationResult } from 'express-validator'

export const validationFields = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send(errors)
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}
