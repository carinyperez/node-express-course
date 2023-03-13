// node has built in modules, including the http server module 
const http = require('http'); 

// create a local server to receive data from 
// the client(browser) is good at sending requests and interpreting responses
// the server is good at interpreting requests and sending responses 
const server = http.createServer((req, res) => {
	// homepage url 
	if (req.url === '/') {
		// send response body
		res.end('Welcome to our homepage')
	} else if (req.url === '/about') {
		res.end('Here is our short history')
	} else {
		// if accessing url(resource) that doesn't exist
		res.end(`
		<h1>Oops!</h1>
		<p>We can't seem to find the page you are looking for</p>
		<a href="/">back home</a>
		`)
	}
})

// server listening to requests on port 5000 
server.listen(5000)