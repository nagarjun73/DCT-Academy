const http = require('http');
const students = require('./data')

//createServer(inbuilt HighrtOrderFunction)
const server = http.createServer(function(req, res){

  res.setHeader('Access-Control-Allow-Origin', '*')

  const rollNo = req.url.slice(1)
  console.log(rollNo);
  const result = students.find((ele) => {
    return ele.roll_number === Number(rollNo)
  })
  console.log('result', result);

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