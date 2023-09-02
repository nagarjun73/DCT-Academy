const express = require('express')
const cors = require('cors')

const app = express()

const contacts = [{
    "_id": 169363513669526,
    "name": "bags",
    "mobile": "6545546",
    "email": "nags@gmail.com"
},
{
    "_id": 1693635654169526,
    "name": "ags",
    "mobile": "6655546",
    "email": "nags@gmail.com"
},
{
    "_id": 169365535669526,
    "name": "cags",
    "mobile": "6985546",
    "email": "nags@gmail.com"
}]

app.use(express.json())
app.use(cors())

app.get('/api/contacts', (req, res)=>{
  const query = req.query
  console.log(query);
  if(query.search){
    const filContact = contacts.filter((ele)=> ele.mobile.includes(query.search)) 
    res.json(filContact)
  }else if(query.sort){
    if(query.sort == 'a-z'){
      const asc = contacts.sort((a,b)=> a.name.localeCompare(b.name))
      res.json(asc)
    }else {
      const des = contacts.sort((a,b)=> b.name.localeCompare(a.name))
      res.json(des)
    }
    console.log(query.sort);
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
  res.json(contact)
})

app.listen(3050, ()=>{
  console.log('server running at port 3050');
})