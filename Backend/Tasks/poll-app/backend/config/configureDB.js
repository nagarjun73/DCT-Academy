const mongoose = require('mongoose')
const url = process.env.MONGODB_URL
const name = process.env.MONGODB_NAME

const configureDB = async () => {
  try {
    await mongoose.connect(`${url}/${name}`)
    console.log('connected to mongoDB')
  } catch (e) {
    console.log('Error connecting to database', e)
  }
}

module.exports = configureDB
