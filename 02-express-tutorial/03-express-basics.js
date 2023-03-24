// express extract a lot of the node logic 
const express = require('express');

// server instance 
const app = express();

// listening for get request on root url 
app.get('/', function (req, res) {
	// send a response
	res.status(200).send('Home Page')
})

// about page 
app.get('/about', function (req, res) {
	// we can also do res.send('About Page') and express will do the rest 
	res.status(200).res.send('About Page')
})

// 404 is the default if server doesn't handle request
// accepts all the http verbs
app.all('*', function (req, res) {
	res.status(404).send('<h1>Resource not found</h1>');
})

// server listening for requests on port 5000 
app.listen(5000, function () {
	console.log('server is listening on port 5000');
})


// app.get, handle get request, get data 
// app.post, handle post request, add data 
// app.put, handle put request, update data
// app.delete, handle delete request, delete data
// app.all, handle all http methods/verbs on that path 
// app.use
// app.listen, listen to request on specified port

