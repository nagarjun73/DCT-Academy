const express = require('express');
const mysql = require('mysql2');

const app = express();

const pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'banking_system'
}).promise()

const 

// app.get("/users", (req, res) => {
//   const sql = "SELECT * FROM users"
//   db.query(sql, (err, data) => { 
//     if(err) return res.json("Error");
//     return res.json(data)
//   })
// })

// app.listen(3030, function(){
//   console.log('Listening........');
// })