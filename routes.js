const express = require('express')
const homeRouter = express.Router()
const data = require('./data.json')
const path = require('path')
const filePath = path.join(__dirname, '/home.html')

//routes (homepage place holder)
homeRouter.get('/', (req, res) => {
  res.sendFile(filePath)
  
})

homeRouter.get('/happymood', (req, res) => {
  const template = 'mood'
  const viewData = data[0]
  
  res.render(template, viewData)
})


homeRouter.get('/sadmood', (req, res) => {
  res.send('This is the moodpage 2 template')
})

homeRouter.get('/partymood', (req, res) => {
  res.send('This is the moodpage 3 template')
})

module.exports = homeRouter