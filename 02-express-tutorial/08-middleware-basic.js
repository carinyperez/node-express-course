// middleware functions are functions that have access to the request object, the response object and the next function in the applications request-response cycle 
// the next function is a function in the express router, when invoked, it calls the next middleware in the stack
// sits between the request and the response 

// req => middleware => res 

const express = require('express');
const app = express();

// middleware
const logger = function(req, res,next) {
	const method = req.method;
	const url = req.url; 
	const time = new Date().getFullYear(); 
	console.log(method, url, time);
	// if the current middleware function does not end the req-res cycle it must call next to pass control to the
	// next middleware function otherwise it will be left hanging unless you send a response 
	next(); 
}

// call the logger 
app.get('/',logger, function(req, res) {
	res.send('Home');
})

app.get('/about', logger, function(req, res){
	res.send('About')
})

app.listen(5000, function(){
	console.log('Server listening on port 5000');
})
