require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const mongoose = require('mongoose')
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

const connectMD = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log('connected to mongodb')
  } catch (e) {
    console.log('error connrcying to mongodb', e)
  }
}
connectMD()

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
  },
  codeTimeline: [{
    userId: String,
    body: String
  }]
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
    msg1.codeTimeline = []
    msg1.save()
      .then((msg) => {
        socket.emit("SAVE_USER", msg);
      })
      .catch((err) => {
        console.log(err)
      })
  })

  socket.on("text_input", (data) => {
    socket.to(data.groupId).emit("display_data", { id: socket.id })

    Message.findOne({ userId: data.userId })
      .then((msg) => {
        if (msg) {
          const newCd = [...msg.codeTimeline, { userId: data.userId, body: data.text }]
          Message.findOneAndUpdate({ userId: data.userId }, { $set: { msg: data.text, codeTimeline: newCd } }, { runValidators: true, new: true })
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

app.post('/api/messages', async (req, res) => {
  const body = req.body
  const user = await Message.findOne({ userId: body.userId })
  res.json(user)
})

server.listen(port, () => {
  console.log('server running on port', port);
})