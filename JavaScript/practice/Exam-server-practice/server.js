import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'

const app = express();

const connection = mysql2.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'banking_system'
})

app.use(cors())

const PORT = 3030
app.listen(PORT, function(){
  console.log(`http://localhost:${PORT}`);
  connection.connect((err) => {
    if(err) throw err;
    console.log("DB connected");
  })
})

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM customers_table"
  connection.query(sql, (err, data) => { 
    if(err) throw err;
    res.send(data)
  })
})

