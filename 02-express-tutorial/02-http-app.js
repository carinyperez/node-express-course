
const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer(function (req, res) {
	// homepage
	if (req.url === '/') {
		// meta data about our response, what type of data are you sending  
		res.writeHead(200, { 'content-type': 'text/html' })
		// data about our response 
		res.write(homePage);
		// all the response headers and body have been sent 
		res.end();
		// about page 
	} else if (req.url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' })
		res.write('<h1> About Page </h1>')
		res.end();
		// styles 
	} else if (req.url === '/styles.css') {
		res.writeHead(200, { 'content-type': 'text/css' })
		res.write(homeStyles);
		res.end();
		// logo 
	} else if (req.url === '/logo.svg') {
		res.writeHead(200, { 'content-type': 'image/svg+xml' });
		res.write(homeLogo);
		res.end();
	}
	//logic 
	else if (req.url === '/browser-app.js') {
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.write(homeLogic); 
		res.end();
	}
	else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1> Page Not Found</h1>');
		// if we omit this we get a constantly loading page
		res.end();
	}
})

server.listen(5000);