const Poll = require('../model/pollsSchema')
const Vote = require('../model/voteSchema')
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

      const oldPoll = await Poll.findOne({ _id: id, creator: userId })
      if (oldPoll) {
        oldPoll.question = body.question
        oldPoll.category = body.category
        oldPoll.options = body.options.map((ele) => {
          const findobj = oldPoll.options.find((els) => els.optionText == ele)
          if (findobj) {
            return findobj
          } else {
            return { optionText: ele }
          }
        })
        oldPoll.expiryDate = fns.addHours(oldPoll.creationDate, body.duration)
        const result = await oldPoll.save()
        if (result) {
          res.json(result)
        } else {
          res.status(400).json({ errors: "Auth error or object not found" })
        }
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.deletePoll = async (req, res) => {
  try {
    const id = req.params.pollId
    const userId = req.userId
    const result = await Poll.findOneAndDelete({ _id: id, creator: userId })
    if (result) {
      res.json({ message: "Poll deleted" })
    } else {
      res.status(400).json("daletation error")
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.postVote = async (req, res) => {
  try {
    const pollId = req.params.pollId
    const userId = req.userId
    const body = _.pick(req.body, ["option"])

    const isVoted = await Vote.findOne({ userId, pollId })
    if (isVoted) {
      res.status(400).json({ errors: "You can cast your vote once for this poll." })
    } else {
      const nVote = new Vote()
      nVote.userId = userId
      nVote.pollId = pollId
      nVote.optionId = body.option
      nVote.voteDate = new Date()
      const result = await nVote.save()
      if (result) {
        res.json({ message: "Vote recorded" })
      }
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.active = async (req, res) => {
  try {
    const result = await Poll.find()
    if (result) {
      const active = result.filter((ele) => new Date(ele.expiryDate) > new Date())
      res.json(active)
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = pollCltr