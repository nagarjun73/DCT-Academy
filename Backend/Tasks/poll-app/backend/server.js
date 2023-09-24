require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const configureDB = require('./config/configureDB')
const { checkSchema } = require('express-validator')
const userCltr = require('./app/controller/userCltr')
const { userRegisterValidation, userLoginValidation } = require('./app/helper/userValidation')
const app = express()

app.use(express.json())
app.use(cors())

configureDB()

app.post('/auth/register', checkSchema(userRegisterValidation), userCltr.register)
app.post('/auth/login', checkSchema(userLoginValidation), userCltr.login)


app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})