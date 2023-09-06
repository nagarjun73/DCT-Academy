const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()
const port = 3066

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/expense-app-db')
  .then(()=>{
    console.log('connected to DB');
  })
  .catch((e)=>{
    console.log('erroe connecting to db' , e);
  })

//const Schema = mongoose.Schema
const { Schema, model } = mongoose

const categorySchema = new Schema({
  name:{
    type:String,
    required:true
  }
})

const Category = model('Category', categorySchema)

// const c1 = new Category()
// c1.name = 'food'
// c1.save()
//     .then((cat)=>{
//       console.log(cat);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })

const expenseSchema = new Schema({
  title:{
    type:String,
    required:true,
    minlength:3
  },
  description:{
    type:String,
  },
  amount:{
    type:Number,
    required:true,
    min:1
  },
  expenseDate:{
    type:Date,
    default: new Date()
  },
  categoryId:{
    type: Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  }
})

const Expense = model('Expense', expenseSchema)

//get all exopenses
//get single expenses
//creating expenses

app.get('/', (req, res)=>{
  res.send('Welocome to MERN')
})

app.get('/api/categories', (req, res)=>{
  Category.find()
      .then((categories)=>{
        res.json(categories)
      })
      .catch((err)=>{
        console.log(err);
      })
})

app.get('/api/categories/:id', (req, res)=>{
  const id = req.params.id
  Category.findById(id)
    .then((cat)=>{
      res.json(cat)
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.post('/api/categories', (req, res)=>{
  const { body } = req
  const c1 = new Category()
  c1.name = body.name
  c1.save()
      .then((categories)=>{
        res.json(categories)
      })
      .catch((err)=>{
        console.log(err);
      })
})

app.put('/api/categories/:id' , (req, res)=>{
  const id = req.params.id
  const body = req.body

  Category.findByIdAndUpdate(id, body, {runValidators:true, new:true})
    .then((cat)=>{
      res.json(cat)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.delete('/api/categories/:id', (req, res)=>{
  const id = req.params.id
  Category.findByIdAndDelete(id)
    .then((cat)=>{
      res.json(cat)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.get('/api/expenses', (req,res)=>{
  Expense.find()
    .then((exp)=>{
      res.json(exp)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.get('/api/expenses/:id', (req, res)=>{
  const id = req.params.id
  Expense.findById(id)
    .then((exp)=>{
      res.json(exp)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.post('/api/expenses', (req, res)=>{
  const body = req.body
  const expense1 = new Expense()
  expense1.title = body.title
  expense1.description = body.description
  expense1.amount = body.amount
  expense1.expenseDate = body.expenseDate
  expense1.categoryId = body.categoryId
  expense1.save()
    .then((exp)=>{
      res.json(exp)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.put('/api/expenses/:id', (req, res)=>{
  const id = req.params.id
  const body = req.body
  Expense.findByIdAndUpdate(id, body, {runValidators:true, new:true})
    .then((exp)=>{
      res.json(exp)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.delete('/api/expenses/:id', (req, res)=>{
  const id = req.params.id
  Expense.findByIdAndDelete(id)
    .then((exp)=>{
      res.json(exp)
    })
    .catch((err)=>{
      res.json(err)
    })
})

app.listen(port, ()=>{
  console.log('server running on port', port);
})