const express = require('express');

const app = express(); 
const logger = require('./logger');
const authorize = require('./authorize');

// all of the requests will use logger middleware
// multiple middleware functions in array 
app.use([logger, authorize])
app.get('/',function(req, res) {
	console.log('user', req.user)
	res.send('Home')
})

app.get('/about',function(req, res) {
	res.send('About')
})

app.get('/api/products',function(req, res) {
	res.send('Products')
})

app.get('/api/items',function(req, res) {
	res.send('Items')
})

app.listen(5000, function() {
	console.log('Server listening to port 5000');
})