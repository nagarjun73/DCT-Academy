const mongoose = require('mongoose')
const { Schema, model } = mongoose

const notesSchema = new Schema({
  title: String,
  body: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

const Note = model('Note', notesSchema)

module.exports = Note