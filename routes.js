const express = require('express')
const homeRouter = express.Router()
const data = './data.json'

//routes (homepage place holder)
homeRouter.get('/', (req, res) => {
  res.send('helloa d asdas das')
})

homeRouter.get('/mood1', (req, res) => {
  res.send('This is the moodpage 1 template')
})


homeRouter.get('/mood2', (req, res) => {
  res.send('This is the moodpage 2 template')
})

homeRouter.get('/mood3', (req, res) => {
  res.send('This is the moodpage 3 template')
})

module.exports = homeRouter