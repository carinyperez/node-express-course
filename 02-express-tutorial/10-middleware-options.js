const express = require('express');

const app = express();

// http request logger middleware for nodeJs
const morgan = require('morgan'); 

app.use(morgan('tiny'));
app.get('/', function(req, res) {
	res.send('Home');
})

app.get('/about', function(req, res) {
	res.send('About');
})

app.get('/api/products', function(req, res) {
	res.send('Products')
})

app.get('/api/items', function(req, res){
	res.send('Items')
})

app.listen(5000, function() {
	console.log('Server running on port 5000');
})