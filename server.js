const express = require('express')
const server = express()

var exphbs  = require('express-handlebars');
 
server.engine('hbs', exphbs({
	// defaultLayout: 'main',
	extname: 'hbs'
}));
server.set('view engine', 'hbs');

server.get('/',(req,res)=>{
	const template = 'mood'
	const viewData = {
		hello: 'world'
	}
	res.render(template,viewData)
})

server.get('/aa',(req,res)=>{
	const template = 'mood'
	const viewData = {
		hello: 'world'
	}
	res.render(template,viewData)
})

module.exports = server