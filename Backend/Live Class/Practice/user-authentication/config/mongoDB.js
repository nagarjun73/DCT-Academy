const mongoose = require('mongoose')

const mongoDB = async () => {
  try {
    const url = process.env.MONGODB_URL
    const name = process.env.MONGODB_NAME
    mongoose.connect(`${url}/${name}`)
    console.log('connected to DB')
  } catch (e) {
    console.log('Error connecting to DB')
  }
}

module.exports = mongoDB