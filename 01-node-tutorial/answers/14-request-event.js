const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// we can rewrite this using the event emitter api 
const server = http.createServer();

// subscribe to event/ listen to event then respond to it 
// the browser emits the request event ??
// server inherits from the event emitter ?? 
server.on('request', (req, res) => {
	// end the response you are sending 
	console.log(req)
	res.end('Welcome')
})

// who is emitting the event ?? 
// server.emit('request')

server.listen(5000); 
