// requires
const express = require('express')
const server = express()
const hbs = require('express-handlebars')
const homeRouter = require('./routes')



//middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use('/', homeRouter)





//exports
module.exports = server