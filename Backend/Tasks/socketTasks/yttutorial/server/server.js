const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

const app = express()
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST']
  }
})

// io.on("connection", (socket) => {
//   console.log("User connected", socket.id);

//   socket.on("join_room", (data) => {
//     socket.join(data)
//   })


//   socket.on('send_message', (data) => {
//     socket.to(data.room).emit("receive_message", data.msg);
//   })
// })

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  setInterval(() => {
    const randomNum = Math.round(Math.random() * 100)
    socket.emit("random_num", randomNum)
  }, 1000)
})

server.listen(3033, () => {
  console.log('server running at port 3033');
})
