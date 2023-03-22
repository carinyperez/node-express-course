// the event loop is what allows NodeJS to perform non-blocking I/O operations despite the fact that javascript is single-threaded 
// an event is something that has happened in our app that we can respond to 
// listening to events and responding to events 
// libuv, system events, abstracted away 
// custom events, inside javascript core, event emitter 
// events are a core building block of node

const EventEmitter = require('events'); 

const customEmitter = new EventEmitter();

// node event emitter, listen for events and respond
// a subscriber/listener waits for an event to be published then fires it's callback 
customEmitter.on('response', (name, id) => {
	// can be a callback
	console.log(`data received ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
	console.log('data received again')
})

// create a response event
// customEmitter is doing both the listening and emitting 
customEmitter.emit('response', 'john', 34)

