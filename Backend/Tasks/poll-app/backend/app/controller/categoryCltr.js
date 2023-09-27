const _ = require('lodash')
const Category = require('../model/categorySchema')
const categoryCltr = {}

categoryCltr.addCategory = async (req, res) => {
  try {
    const body = _.pick(req.body, ["name"])
    const cat = new Category(body)
    const result = await cat.save()
    if (result) {
      res.json({ message: "Category created", category: result })
    } else {
      res.status(400).json("Error creating category")
    }
  } catch (e) {
    res.json(e)
  }
}

categoryCltr.categoryName = async (req, res) => {
  try {
    const categoryStr = (req.params.categoryName)
    const catObj = await Category.findOne({ name: { $regex: categoryStr, $options: 'i' } })
    console.log(catObj._id)
    const pollRes = await Poll.find({ category: catObj._id })
    console.log(pollRes)
    if (pollRes.length !== 0) {
      // cost pollRes = Poll.f
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = categoryCltr