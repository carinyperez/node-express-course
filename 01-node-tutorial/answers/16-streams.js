// a buffer is a temporary holding spot for data being moved from one place to another, limited in size 
// a stream is a sequence of data made available over time 
// data flows through streams and can be readable, writable or both 
// if the data if bigger than the buffer we will get a chunk of the data
// streams are an optimal solution to read big files 
// nodeJS likes streams because it minimizes the memory we use in out application so it improves performance

// for example downloading a movie takes a long time but streaming a movie is fast
// because you are storing the data in a buffer and downloading that chunk of movie as you watch it

const { createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});
const stream = createReadStream('./content/big.txt');

// listening to events, what is emitting the data event ?? is it the createReadStream
// the data event is emitted when the stream relinquishes ownership of a chunk of data to a consumer 
stream.on('data', (result) => {
	// returns a buffer if no encoding 
	console.log(result)
})

// stream.emit('data'); 