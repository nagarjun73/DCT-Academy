const _ = require('lodash')
const bcrypt = require('bcryptjs')
const User = require('../model/userSchema')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const userCltr = {}

userCltr.register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.json(errors.array())
    } else {
      const body = _.pick(req.body, ['username', 'email', 'password'])
      //gen salt
      const salt = await bcrypt.genSalt()
      //gen hashed password
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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array())
    } else {
      const body = _.pick(req.body, ['email', 'password'])
      //check user present
      const user = await User.findOne({ email: body.email })
      if (!user) {
        res.status(400).json({ errors: 'Invalid Email or password' })
      } else {
        //check bcrypt password 
        const result = await bcrypt.compare(body.password, user.password)
        if (!result) {
          res.status(400).json({ errors: 'Password is wrong' })
        } else {
          //generate jwtoken
          const token = jwt.sign({ id: user._id }, process.env.SECRET_CODE, { expiresIn: '7d' })
          res.json({ token })
        }
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = userCltr