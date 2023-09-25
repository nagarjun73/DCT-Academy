const jwt = require('jsonwebtoken')

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]
    const verified = await jwt.verify(token, process.env.SECRET_CODE)
    req.userId = verified.id
    next()
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = userAuth