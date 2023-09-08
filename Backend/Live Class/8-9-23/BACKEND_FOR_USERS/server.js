const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3033

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/users-rud")

const {Schema, model} = mongoose

const userSchema  = new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    required:true
  },
  id:{
    type:Number,
    required:true
  }
})

const User = model("User", userSchema)

app.get('/api/users/:id', (req, res)=>{
  const id = req.params.id
  User.findOne({id:id})
    .then((user)=>{
      if(user){
        res.status(200).json(user)
      }else{
        res.status(404).json({errors:"user not found in record"})
      }
    })
    .catch((err)=>{
      res.json(err);
    })
})


app.post('/api/users', (req, res)=>{
  const body = req.body
  const u1 = new User()
  u1.name = body.name
  u1.email = body.email
  u1.id = body.id
  u1.save()
    .then((user)=>{
      if(user){
        res.status(200).json(user)
      }else{
        res.status(404).json({errors:"user not found in record"})
      }
    })
    .catch((err)=>{
      res.json(err);
    })
})

app.put('/api/users/:id', (req, res)=>{
  const id = req.params.id
  const body = req.body
  User.findOneAndUpdate({id:id}, body, {runValidators:true, new:true})
    .then((user)=>{
      if(user){
        res.status(200).json(user)
      }else{
        res.status(404).json({errors:"user not found in record"})
      }
    })
    .catch((err)=>{
      res.json(err);
    })
})

app.delete('/api/users/:id', (req, res)=>{
  const id = req.params.id
  User.findOneAndDelete({id:id})
    .then((user)=>{if(user){
        res.status(200).json({notice:`${user.name} has been deleted`})
      }else{
        res.status(404).json({errors:"user not found in record"})
      }
    })
    .catch((err)=>{
      res.json(err);
    })
})

app.listen(port, ()=>{
  console.log('server running on port', port);
})