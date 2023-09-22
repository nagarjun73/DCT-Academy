const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers["authorization"]
    const result = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = result.id
    next()
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = authenticateUser