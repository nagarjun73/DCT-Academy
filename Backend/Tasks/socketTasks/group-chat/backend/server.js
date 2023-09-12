const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const mongoose = require('mongoose')
const port = 3066

const app = express()
app.use(cors())

mongoose.connect("mongodb://localhost:27017/groupchat")

const { Schema, model } = mongoose

const messageSchema = new Schema({
  msg: {
    type: String
  },
  groupId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})

const Message = model("Message", messageSchema)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
})

io.on('connection', (socket) => {
  console.log("Connection established", socket.id);
  let name = ''

  socket.on("join_group", (data) => {
    socket.join(data.groupId)

    const msg1 = new Message()
    msg1.msg = ""
    msg1.groupId = data.groupId
    msg1.userId = socket.id
    msg1.userName = data.name
    msg1.save()
      .then((msg) => {
        console.log(msg);
      })
      .catch((err) => {
        console.log(err)
      })
  })

  socket.on("text_input", (data) => {
    socket.to(data.groupId).emit("display_data", { msg: data.text, id: socket.id })

    Message.findOne({ userId: socket.id })
      .then((msg) => {
        if (msg) {
          Message.findOneAndUpdate({ userId: socket.id }, { msg: data.text }, { runValidators: true, new: true })
            .then((msg) => {
              console.log(msg);
            })
            .catch((err) => {
              console.log(err);
            })
        } else {
          const msg1 = new Message()
          msg1.msg = data.text
          msg1.groupId = data.groupId
          msg1.userId = socket.id
          msg1.userName = name
          msg1.save()
            .then((msg) => {
              console.log(msg);
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
  })
})

app.get('/api/messages', (req, res) => {
  Message.find()
    .then((msg) => {
      res.json(msg)
    })
    .catch((err) => {
      res.json(err)
    })
})


server.listen(port, () => {
  console.log('server running on port', port);
})
