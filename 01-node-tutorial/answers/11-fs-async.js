// node has built in modules, including the fs module 
const {readFile, writeFile} = require('fs');

console.log('start')
// if no encoding it will return a buffer 
readFile('./content/first.txt', 'utf8', (err, result) => {
	// error first pattern
	if (err) {
		console.log(err);
		return; 
	}
	const first = result; 
	// callback hell, can oly access result here
	readFile('./content/second.txt', 'utf8', (err, result) => {
		// error first pattern
		if (err) {
			console.log(err);
			return; 
		}
		
		const second = result;

		writeFile('./content/result-async.txt', `Here is the result: ${first} ${second}`, (err, result) => {
			if (err) {
				console.log(err); 
				return; 
			}
			console.log(result);
			console.log('done with this task')
		})
	})
})

// will print out start, starting next task then done with this task because async code is non-blocking  
console.log('starting next task')
