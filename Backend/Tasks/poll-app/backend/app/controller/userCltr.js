const _ = require('lodash')
const bcrypt = require('bcryptjs')
const User = require('../model/userSchema')
const { validationResult } = require('express-validator')
const userCltr = {}

userCltr.register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.json(errors.array())
    } else {
      const body = _.pick(req.body, ['username', 'email', 'password'])
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(body.password, salt)

      const user = new User()
      user.username = body.username
      user.email = body.email
      user.password = hash
      user.registrationDate = new Date()
      const result = await user.save()
      if (result) {
        res.json({
          "message": "User registered successfully."
        })
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

userCltr.login = async (req, res) => {
  try {

  } catch (e) {
    res.json(e)
  }
}

module.exports = userCltr