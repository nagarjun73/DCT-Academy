const http = require('http');
const students = require('./data')

//createServer(inbuilt HighrtOrderFunction)
const server = http.createServer(function(req, res){
  const rollNo = req.url.slice(1)
  const result = students.find((ele) => {
    return ele.roll_number === Number(rollNo)
  })
  if(result){
    res.end(JSON.stringify(result))
  }else{
    res.end(JSON.stringify({}))
  }
})

//to start server and set port
server.listen(3000, function(){
  console.log('server is running');
})