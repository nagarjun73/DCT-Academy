const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//post char to charactersData
app.post('/api/characters', (req, res)=>{
  const body = req.body
  const charObj = {
    _id:Number(new Date()),
    original:body.char,
    transformed:body.char.toLowerCase() == body.char ? body.char.toUpperCase() : body.char.toLowerCase(),
    sentAt: new Date().toLocaleDateString().split('/').join('-')
  }
  res.json(charObj)
})

//get

app.get('/api/characters/:char', (req, res)=>{
  const char = req.params.char
  const charObj = {
    isVowel: 'aeiou'.includes(char) ? true : false,
    isConsonant:'aeiou'.includes(char) ? false : true,
    asciiValue:char.charCodeAt(),
    alphaIndex:'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase())
  }
  res.json(charObj)
})

app.listen(3030, ()=>{
  console.log('server running on port 3030');
})