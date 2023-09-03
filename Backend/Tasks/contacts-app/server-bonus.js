const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()


const data = fs.readFileSync('data.json')
const contacts = JSON.parse(data) 

app.use(express.json())
app.use(cors())

app.get('/api/contacts', (req, res)=>{
  const query = req.query
  if(Object.keys(query).length == 2){

    function callBackChecker(obj){
      for(const key in obj){
        if(String(obj[key]).toLowerCase().includes(query.search)){
          return true
        }
      }
      return false
    }

    const filContact = contacts.filter(function(ele) {
      return callBackChecker(ele)
      // return ele.mobile.includes(query.search)
    })
    console.log(filContact);
    if(query.sort == 'a-z'){
      const asc = filContact.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      res.json(asc)
    }else {
      const des = filContact.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      res.json(des)
    }
  }else{
    res.json(contacts)
  }
})

app.post('/api/contacts', (req, res)=>{
  const body = req.body
  const contact = {
    _id:Number(new Date()),
    name:body.name,
    mobile:body.mobile,
    email:body.email
  }
  contacts.push(contact)
  fs.writeFileSync('data.json', JSON.stringify(contacts))
  res.json(contact)
})

app.listen(3060, ()=>{
  console.log('server running at port 3060');
})