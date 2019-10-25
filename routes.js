const express = require('express')
const homeRouter = express.Router()
const data = require('./song.json')
const path = require('path')
const filePath = path.join(__dirname, '/home.html')

//routes (homepage place holder)
homeRouter.get('/', (req, res) => {
  res.sendFile(filePath)
  
})

homeRouter.get('/happymood', (req, res) => {
  const template = 'mood'
  const viewData = data.happy
  
  res.render(template, viewData)
})


homeRouter.get('/sadmood', (req, res) => {
  const template = 'mood'
  const viewData = data.blue
  
  res.render(template, viewData)
})

homeRouter.get('/partymood', (req, res) => {
  const template = 'mood'
  const viewData = data.party
  
  res.render(template, viewData)
})

module.exports = homeRouter