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

    //update on category
    app.put('/api/categories/:id', (req, res)=>{
      const id = req.params.id
      const body = req.body
      const cat = categoryData.find((ele)=> ele._id == id)

      if(cat){
        Object.assign(cat, body)
        res.json(cat)
      }else{
        res.status(404).json({})
      }
    })

    //delete categoirs
    app.delete('/api/categories/:id', (req,res)=>{
      const id = req.params.id
      const index = categoryData.findIndex((ele) => ele._id == id)
      if(index >= 0){
        const [cat] = categoryData.splice(index, 1)
        res.json(cat)
      }else{
        res.status(404).json({})
      }
    })


    //get all expenses
    app.get('/api/expenses', ((req, res)=>{
      console.log(req.query);
      const {categoryId} = req.query
      if(categoryId){
        const expenses = expensesData.filter((ele)=> ele.categoryId == categoryId)
        if(expenses.length){
          res.json(expenses)
        }else{
          res.status(404).json([])
        }
      }else{
        res.json(expensesData)
      }
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

    //Update expenses
    app.put('/api/expenses/:id', (req, res) =>{
      const id = req.params.id
      const body = req.body
      const exp = expensesData.find((ele)=> ele._id == id)

      if(exp){
        Object.assign(exp, body)
        res.json(exp)
      }else{
        res.status(404).json({})
      }
    })

    //delete expense
    app.delete('/api/expenses/:id', (req, res)=>{
      const id = req.params.id
      const index = expensesData.findIndex((ele) => ele._id == id)

      if(index >= 0){
        const [exp] = expensesData.splice(index, 1)
        res.json(exp)
      }else{
        res.status(404).json({})
      }
    })

    //get expenses of a single category (nested route)
    app.get('/api/categories/:id/expenses', (req, res)=>{
      const id = req.params.id
      const expenses = expensesData.filter((ele) => ele.categoryId == id)
      res.json(expenses)
    })

app.listen(3075, ()=>{
  console.log('server is running on 3075');
})