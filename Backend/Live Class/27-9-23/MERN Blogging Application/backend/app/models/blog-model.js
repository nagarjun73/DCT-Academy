const mongoose = require('mongoose')
const { Schema, model } = mongoose

const blogSchema = new Schema({
  title: String,
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "published"]
  }
}, { timestamps: true })

const Blog = model('blog', blogSchema)

exports.default = Blog