const mongoose = require("mongoose");

const { Schema, model } = mongoose

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  registrationDate: Schema.Types.Date,
  pollsCreated: [{
    type: Schema.Types.ObjectId,
    ref: 'Poll'
  }
  ]
})

const User = model('User', userSchema)

module.exports = User