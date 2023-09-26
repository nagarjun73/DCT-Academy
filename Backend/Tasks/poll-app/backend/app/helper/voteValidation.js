const Poll = require('../model/pollsSchema')

const voteValidation = {
  option: {
    custom: {
      options: async (value, { req, res }) => {
        try {
          const foundPoll = await Poll.findOne({ _id: req.params.pollId })
          if (foundPoll) {
            const foundopt = foundPoll.options.find((opt) => opt._id == value)
            if (foundopt) {
              return true
            } else {
              throw new Error("selected option doesnot exists")
            }
          } else {
            throw new Error("poll not found")
          }
        } catch (e) {
          res.status(400).json(e)
        }
      }
    }
  }
}

module.exports = voteValidation