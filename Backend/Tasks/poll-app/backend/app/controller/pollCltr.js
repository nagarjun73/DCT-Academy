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

pollCltr.getDetail = async (req, res) => {
  try {
    const id = req.params.pollId
    const poll = await Poll.findOne({ _id: id })
    if (poll) {
      res.json({ poll: poll })
    } else {
      res.status(400).json({ errors: "Poll not found" })
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.updatePoll = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
    } else {
      const id = req.params.pollId
      const body = _.pick(req.body, ['question', 'options', 'duration', 'category'])
      const userId = req.userId

      const fpoll = await Poll.findOne({ _id: id, creator: userId })
      fpoll.question = body.question
      fpoll.category = body.category
      fpoll.options = body.options.map((ele) => {
        const findobj = fpoll.options.find((els) => els.optionText == ele)
        if (findobj) {
          return findobj
        } else {
          return { optionText: ele }
        }
      })
      fpoll.expiryDate = fns.addHours(fpoll.creationDate, body.duration)
      const result = await fpoll.save()
      if (result) {
        res.json(result)
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.deletePoll = async (req, res) => {
  try {
    const id = req.params.pollId
    const result = Poll.findOneAndDelete({ _id: id, creator: userId })
    if (result) {
      res.json({ message: "Poll deleted" })
    } else {
      res.status(400).json("daletation error")
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = pollCltr