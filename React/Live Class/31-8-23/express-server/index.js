// front end (react) = es6 modules used
// import React from 'react'

//common js module loader used in backend
const express = require('express')
const cors = require('cors')

const app = express()

const categoryData = [
      {
        _id:'1',
        name:'food'
      },
      {
        _id:'2',
        name:'party'
      },
      {
        _id:'3',
        name:'study'
      }
    ]

    const expensesData = [
    {
      _id:'1',
      title:'study material',
      amount:'625',
      categoryId:'3'
    },
    {
      _id:'2',
      title:'food material',
      amount:'1265',
      categoryId:'1'
    },
    {
      _id:'3',
      title:'food2 material',
      amount:'1200',
      categoryId:'1'
    },
    {
      _id:'4',
      title:'study2 material',
      amount:'600',
      categoryId:'3'
    }
  ]


  app.use(express.json())
  app.use(cors())

    //express request listener
    //app.httpMethod(url, callback)

    //get all categories
    app.get('/api/categories', (req, res)=>{
      res.json(categoryData)
    })

    //show one category
    app.get('/api/categories/:id', (req, res)=>{
      const id = req.params.id
      const cat = categoryData.find((ele =>{
        return ele._id == id
      }))
      if(cat){
        res.json(cat)
      }else{
        res.status(404).json({})
      }
    })

    //create one category
    app.post('/api/categories', (req, res)=>{
      const body = req.body
      const catObj = {
        _id: Number(new Date()),
        name:body.name
      }
      categoryData.push(catObj)
      res.json(catObj)
    })


    //get all expenses
    app.get('/api/expenses', ((req, res)=>{
      res.json(expensesData)
    }))

    //show one expense
    app.get('/api/expenses/:id', (req, res) =>{
      const id = req.params.id
      const exp = expensesData.find((ele)=>{
        return ele._id == id
      })

      if(exp){
        res.json(exp)
      }else{
        res.status(404).json({})
      }
    })

app.listen(3075, ()=>{
  console.log('server is running on 3075');
})