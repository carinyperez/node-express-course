const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', function (req, res) {
	// sends a json response, using JSON.stringify()
	res.json(products);
})

app.listen(5000, function (req, res) {
	console.log('Server is listening to port 5000');
})