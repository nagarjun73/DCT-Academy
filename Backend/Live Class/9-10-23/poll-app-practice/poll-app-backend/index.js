require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log('Server running on port', port)
})