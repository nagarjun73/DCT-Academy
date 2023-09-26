const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  name: String
})

const Category = model("Category", categorySchema)

module.exports = Category