const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3075
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/server-to-server')

const{Schema, model} = mongoose

const userSchema = new Schema({
  name:{
    type:String,
  },
  userId:{
    type:String
  }
})

const User = model('User', userSchema)

app.get('/api/users/:id', (req, resd)=>{
  const id = req.params.id
  User.findOne({userId:id})
    .then((user)=>{
      if(!user){
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((res)=>{
            const user1 = new User()
            user1.name = res.data.name
            user1.userId = res.data.id
            user1.save()
              .then((user)=>{
                console.log(user);
                resd.json(user)
              })
              .catch((err)=>{
                console.log(err)
              })
          })
          .catch((err)=>{
            console.log(err);
          })
      }else{
        User.findOne({userId:id})
          .then((usd)=>{
            resd.json(usd)
          })
          .catch((err)=>{
            console.log(err);
          })
      }
    })
})

app.listen(port, ()=>{
  console.log('Server running on port', port);
})
