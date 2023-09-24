const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const Note = require('../model/notesModel')
const _ = require('lodash')
const notesCltr = {}

notesCltr.addNote = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    } else {
      const body = _.pick(req.body, ['title', 'body'])
      const token = req.headers["authorization"]
      const result = jwt.verify(token, process.env.JWT_SECRET)
      console.log(result)
      const note = new Note(body)
      note.userId = result.id
      const resl = await note.save()
      res.json(resl)
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = notesCltr