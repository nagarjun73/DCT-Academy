const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3075
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors())

// https://api.geoapify.com/v1/geocode/search?name=DCT%20acadey&street=HB%20samaja%20road&postcode=560004&city=Bengaluru&state=Karnataka&country=India&format=json&apiKey=YOUR_API_KEY

mongoose.connect('mongodb://127.0.0.1:27017/getLocation')

const{Schema, model} = mongoose

const addressSchema = new Schema({
  lat:{
    type:String,
    required:true
  },
  lon:{
    type:String,
    required:true
  },
  formattedAdd:{
    type:String,
    required:true
  }
})

const address = model('address', addressSchema)

app.get('/api/places', (req, res)=>{
  address.find()
    .then((add)=>{
      res.json(add)
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.post(`/api/addresses`,(req, res)=>{
  const body = req.body
  console.log(body);
  axios.get(`https://api.geoapify.com/v1/geocode/search?name=${body.name}&street=${body.street}&postcode=${body.postcode}&city=${body.city}&state=${body.state}&country=${body.country}&format=json&apiKey=de80eb3914e44b11ad5f6128504f83f1`)
    .then((resp)=>{
      const add1 = new address()
      add1.lat = resp.data.results[0].lat
      add1.lon = resp.data.results[0].lon
      add1.formattedAdd = `${body.name},${body.street},${body.postcode},${body.city},${body.state},${body.country}`.toLowerCase()
      add1.save()
        .then((address)=>{
          res.json(address)
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.listen(port, ()=>{
  console.log('listening to port', port);
})

