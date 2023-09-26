const { Schema, model } = require('mongoose')

const voteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  pollId: {
    type: Schema.Types.ObjectId,
    ref: "Poll"
  },
  optionId: Schema.Types.ObjectId,
  voteDate: Date
})

const Vote = model("Vote", voteSchema)

module.exports = Vote