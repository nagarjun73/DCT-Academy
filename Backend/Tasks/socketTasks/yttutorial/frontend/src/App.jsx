import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3033")

function App() {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const [room, setRoom] = useState('')
  const [num, setNum] = useState('')

  useEffect(() => {
    // socket.on("receive_message", (data) => {
    //   setMessage(data)
    // })

    socket.on("random_num", (data) => {
      setNum(data)
    })
  }, [socket])

  // function sendMsgFunction() {
  //   const msg = input
  //   socket.emit("send_message", { msg, room })
  // }

  // function joinRoom() {
  //   socket.emit("join_room", room)
  // }

  return (
    <>
      <h1>Random Number - {num}</h1>

      {/* <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinRoom}>join room</button>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMsgFunction}>send</button> */}
    </>
  )
}

export default App
