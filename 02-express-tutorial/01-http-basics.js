// HTTP  is a protocol for data sent over the web via TCP/IP
// a protocol is a set of rules
// TCP is the protocol for sending data trough a socket via packets 
// IP is internet protocol, IP is a number that identifies a computer, the address to send the data
// headers are meta data about out response  

const http = require('http');

const server = http.createServer(function (req, res) {
	// this and res.end('home page') are equivalent 
	// res.write('home page');
	// res.end();

	// homepage
	if (req.url === '/') {
		// meta data about our response, what type of data are you sending  
		res.writeHead(200, {'content-type': 'text/html'});
		// data about our response 
		res.write('<h1> Home Page </h1>');
		// all the response headers and body have been sent 
		res.end();
	// about page 
	} else if (req.url === '/about') {
		res.writeHead(200, {'content-type': 'text/html'});
		res.write('<h1> About Page </h1>')
		res.end();
	// 404 page
	} else {
		res.writeHead(404, {'content-type': 'text/html'});
		res.write('<h1> Page Not Found</h1>');
		// if we omit this we get a constantly loading page
		res.end();
	}
})

server.listen(5000);


