const server = require('./server.js')

const port = process.env.port || 3000

server.listen(port,()=>{
	console.log('Listening on port ' + port)
})


