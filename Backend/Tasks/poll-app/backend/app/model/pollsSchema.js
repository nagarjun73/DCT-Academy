const mongoose = require('mongoose')
const { Schema, model } = mongoose

const pollsSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  question: String,
  creationDate: Schema.Types.Date,
  expiryDate: Schema.Types.Date,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  options: [
    {
      optionText: String
    }
  ],
})

const Poll = model("Poll", pollsSchema)

module.exports = Poll