// create an express server 
// '/' get request returns the index.html 
// '/sample' returns the line "This is working"
// use port 3000 

const express = require('express');
const path = require('path');

const app = express();
const consoleLogger = require('./practice-middleware');

// use middleware to serve static files 
app.use(express.static('./new-public'));

// use middleware console logger 
app.use(consoleLogger)

app.get('/sample', function(req, res) {
	res.send('This is working')
})

app.listen(3000, function(req, res) {
	console.log('Server listening on port 3000');
})