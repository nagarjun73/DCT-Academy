const http = require('http')
const server = http.createServer(function(req,res){

  const expenses = [
    {
      _id:'1',
      title:'study material',
      amount:'625',
      categoryId:'003'
    },
    {
      _id:'2',
      title:'food material',
      amount:'1265',
      categoryId:'001'
    },
    {
      _id:'3',
      title:'food2 material',
      amount:'1200',
      categoryId:'001'
    },
    {
      _id:'4',
      title:'study2 material',
      amount:'600',
      categoryId:'003'
    }
  ]

  const categories = [
      {
        _id:'001',
        name:'food'
      },
      {
        _id:'002',
        name:'party'
      },
      {
        _id:'003',
        name:'study'
      }
    ]

    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url == '/api/categories'){
      res.end(JSON.stringify(categories))
    } else if(req.url == '/api/expenses'){
      res.end(JSON.stringify(expenses))
    }else{
      res.end('page not found')
    }
  
})

server.listen(3050, ()=>{
  console.log('server running at port 3050');
})