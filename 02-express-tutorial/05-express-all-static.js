const express = require('express');

const app = express();

// to serve static files such as images, css files and javascript files use the express static built in middleware
app.use(express.static('./public'));

// this is also a static file 
// app.get('/', function(req, res) {
// 	// transfers the file at the given path 
// 	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })

app.listen(5000, function(req, res) {
	console.log('Server is listening to port 5000');
});