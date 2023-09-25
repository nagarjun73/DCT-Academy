const Poll = require('../model/pollsSchema')
const _ = require('lodash')
const { validationResult } = require('express-validator')
const fns = require('date-fns')



const pollCltr = {}

pollCltr.create = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() })
    } else {
      const body = _.pick(req.body, ['question', 'options', 'duration', 'category'])
      const poll = new Poll()
      poll.creator = req.userId
      poll.question = body.question
      poll.creationDate = new Date()
      poll.expiryDate = fns.addHours(poll.creationDate, body.duration)
      poll.category = body.category
      poll.options = body.options.map((op) => {
        return { optionText: op }
      })
      const result = await poll.save()
      if (result) {
        res.json({
          message: "Poll created", pollId: result._id
        })
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = pollCltr