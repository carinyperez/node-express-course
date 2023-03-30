var http = require('http'); 
var fs = require('fs');


// server listening to requests on port 5000,send text on request 
http.createServer(function(req, res) {
	// this is not memory efficient 
	// Content-Length: 15890, 16kb 
	// const text = fs.readFileSync('./content/big.txt'); 
	// res.end(text)

	// reading a big file using streams 
	// memory efficient, response headers are chunked 
	const fileStream = fs.createReadStream('non-existing-file.txt', 'utf8'); 
	// listening to open events 
	fileStream.on('open', () => {
		// piping from createReadStream to createWriteStream
		// we can write data in chunks 
		// writing a big file 
		fileStream.pipe(res)
	})
	// listening to error events 
	fileStream.on('error', (err) => {
		res.end(err)
	})
}).listen(5000); 