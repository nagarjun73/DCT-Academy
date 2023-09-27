const User = require('../model/userSchema')
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
      const userId = req.userId
      const poll = new Poll()
      poll.creator = userId
      poll.question = body.question
      poll.creationDate = new Date()
      poll.expiryDate = fns.addHours(poll.creationDate, body.duration)
      poll.category = body.category
      poll.options = body.options.map((op) => {
        return { optionText: op }
      })
      const result = await poll.save()
      if (result) {
        const usr = await User.findOne({ _id: userId })
        const pollIds = usr.pollsCreated
        pollIds.push(result._id)
        usr.pollsCreated = pollIds
        const userUpdated = await usr.save()
        if (userUpdated) {
          res.json({
            message: "Poll created", pollId: result._id
          })
        }
      } else {
        res.status(400).json({ error: "poll add failed with an error" })
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

pollCltr.myPolls = async (req, res) => {
  try {
    const userId = req.userId
    const result = await Poll.find({ creator: userId })
    res.json(result)
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.result = async (req, res) => {
  try {
    const id = req.params.pollId
    const poll = await Poll.findOne({ _id: id })
    const pollOpt = poll.options
    const pollResult = await Vote.find({ pollId: id })
    if (pollResult) {
      const VoteObj = pollResult.reduce((acc, item) => {
        const option = pollOpt.find((ele) => ele._id.equals(item.optionId)).optionText
        if (!acc[option]) {
          acc[option] = 1
        } else {
          acc[option] += 1
        }
        return acc
      }, {})
      res.json({ pollId: id, results: Object.entries(VoteObj) })
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

pollCltr.search = async (req, res) => {
  try {
    const keyword = req.query.keyword
    const polls = await Poll.find()
    if (polls) {
      const queryResult = polls.filter((ele) => ele.question.toLowerCase().includes(keyword.toLowerCase()))
      res.json({ polls: queryResult })
    }
  } catch (e) {
    res.status(400).json(e)
  }
}



module.exports = pollCltr