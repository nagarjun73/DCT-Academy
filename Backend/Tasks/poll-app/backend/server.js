require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const configureDB = require('./config/configureDB')
const { checkSchema } = require('express-validator')
const userCltr = require('./app/controller/userCltr')
const pollCltr = require('./app/controller/pollCltr')
const categoryCltr = require('./app/controller/categoryCltr')
const { userRegisterValidation, userLoginValidation } = require('./app/helper/userValidation')
const pollValidation = require('./app/helper/pollValidation')
const voteValidation = require('./app/helper/voteValidation')
const userAuth = require('./app/middlewares/userAuth')
const app = express()

app.use(express.json())
app.use(cors())

configureDB()

app.post('/auth/register', checkSchema(userRegisterValidation), userCltr.register)
app.post('/auth/login', checkSchema(userLoginValidation), userCltr.login)

app.post('/polls', userAuth, checkSchema(pollValidation), pollCltr.create)
app.get('/polls/:pollId', pollCltr.getDetail)
app.put('/polls/:pollId', userAuth, checkSchema(pollValidation), pollCltr.updatePoll)
app.delete('/polls/:pollId', userAuth, pollCltr.deletePoll)

app.post('/polls/vote/:pollId', userAuth, checkSchema(voteValidation), pollCltr.postVote)

app.get("/polls", pollCltr.active)
app.get("/mypolls", userAuth, pollCltr.myPolls)
app.get("/polls/results/:pollId", pollCltr.result)
app.get("/search", pollCltr.search)
app.post("/category", categoryCltr.addCategory)
app.get("/polls/category/:categoryName", categoryCltr.categoryName)

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})