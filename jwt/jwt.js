import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secretKey = process.env.JWT_SECRET

export const jsonwebtokenController = {
  sendToken: (req, res) => {
    const payload = { user_id: true }
    const token = jwt.sign(payload, secretKey, { expiresIn: '1w' }) // 1 semana
    res.json({ token })
  },

  authenticateJWT: (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
      // Extract the token from the header
      const token = req.headers.authorization.split(' ')[1]
      // Verify the token
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Failed to authenticate token.' })
        }
        req.decoded = decoded
        next()
      })
    } else {
      return res.status(401).json({ message: 'No token provided.' })
    }
  }
}
