const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3075

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/transaction-app')

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
})

const transactionSchema = new Schema({
  senderId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  receiverId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  transactionTime: {
    type: Date,
    required: true
  }
})

const User = model("User", userSchema)
const Transaction = model("Transaction", transactionSchema)


app.get('/api/users', (req, res) => {
  User.find()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id
  User.findOne({ _id: id })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.post('/api/users', (req, res) => {
  const body = req.body
  const u1 = new User()
  u1.name = body.name
  u1.balance = body.balance
  u1.save()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      res.status(404).json(err)
    })
})

app.get('/api/transactions', (req, res) => {
  Transaction.find()
    .then((tran) => {
      res.json(tran)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.post('/api/transactions', (req, res) => {
  const body = req.body

  const t1 = new Transaction()
  t1.senderId = body.senderId
  t1.receiverId = body.receiverId
  t1.amount = body.amount
  t1.transactionTime = new Date()
  t1.save()
    .then((tras) => {
      User.findById(body.senderId)
        .then((sender) => {
          const senderObj = { balance: sender.balance - body.amount }
          console.log(senderObj);
          User.findByIdAndUpdate(body.senderId, senderObj)
            .then((sender) => {
              console.log(sender)
            })
        })

      User.findById(body.receiverId)
        .then((receiver) => {
          const receiverObj = { balance: receiver.balance + body.amount }
          User.findByIdAndUpdate(body.receiverId, receiverObj)
            .then((receiver) => {
              console.log(receiver)
            })
        })

      res.json(tras)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.listen(port, () => {
  console.log('server running on port', port);
})