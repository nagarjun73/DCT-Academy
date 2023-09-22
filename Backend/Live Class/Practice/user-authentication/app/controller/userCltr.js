const _ = require('lodash')
const User = require('../model/userModel')
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userCtlr = {}

userCtlr.register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() })
    } else {
      const body = _.pick(req.body, ['username', 'email', "password"])
      const user = new User()
      user.username = body.username
      user.email = body.email
      const salt = await bcryptjs.genSalt()
      const hashedPass = await bcryptjs.hash(body.password, salt)
      user.password = hashedPass
      const result = await user.save()
      res.json(result)
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

userCtlr.login = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    } else {
      const body = _.pick(req.body, ["email", "password"])
      const usr = await User.findOne({ email: body.email })
      if (usr) {
        const passwordChecked = await bcryptjs.compare(body.password, usr.password)
        if (passwordChecked) {
          const token = jwt.sign({ id: usr._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
          res.json({ token: token })
        } else {
          res.status(400).res.json({ errors: "Invalid password" })
        }
      } else {
        res.status(400).json({ errors: "Invalid email and password" })
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

userCtlr.account = async (req, res) => {
  try {
    const userId = req.userId
    const result = await User.findOne({ _id: userId })
    const user = _.pick(result, ["username", "email"])
    res.json(user)
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = userCtlr