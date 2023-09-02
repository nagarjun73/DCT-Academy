const http = require('http')
const server = http.createServer(function(req, res){

    const categories = [
      {
        id:'001',
        name:'food'
      },
      {
        id:'002',
        name:'party'
      }
    ]

    if(req.url == '/api/categories'){
      res.end(JSON.stringify(categories))
    }
})

server.listen(3060, ()=>{
  console.log('server running on port number 3060');
})