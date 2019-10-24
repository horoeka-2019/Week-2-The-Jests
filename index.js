// refer to server
const server = require('./server')


// port
const port = process.env.PORT || 3000

// listen to server
server.listen(port, function () {
  console.log('Server is listening to port', port)
})
