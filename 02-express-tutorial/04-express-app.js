const express = require('express');
const path = require('path')

// creates an express application
const app = express();

// middleware is code that sits between two layers of software, in our client server-model
// the middleware that runs between the request and the response 
// read static files using middleware 
// static files are files that don't change when your application is running
// a javascript file can be static but a nav bar is static 
app.use(express.static('./public'));

// trigger callback-function when event is emitted, event-driven architecture
app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', function (req, res) {
	res.status(404).send('Resource Not Found')
})

app.listen(5000, function (req, res) {
	console.log('Server running on port 5000');
})
