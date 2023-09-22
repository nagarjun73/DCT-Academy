require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const mongoDB = require('./config/mongoDB')
const userCtlr = require('./app/controller/userCltr')
const { checkSchema } = require('express-validator')
const { userRegistrationSchema, userLoginSchema } = require('./app/helper/userValidation')
const authenticateUser = require('./app/middleware/authenticateUser')

const app = express()
app.use(express.json())
app.use(cors())

mongoDB()

app.post('/api/users/register', checkSchema(userRegistrationSchema), userCtlr.register)
app.post('/api/users/login', checkSchema(userLoginSchema), userCtlr.login)
app.get('/api/users/account', authenticateUser, userCtlr.account)

app.listen(PORT, () => {
  console.log('server running at port', PORT)
})