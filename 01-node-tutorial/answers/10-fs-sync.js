// node has built in modules, including the fs module 
// the fs module enables interacting with the file system 
// can be used synchronously, blocking or async which is non-blocking 

// destructure from fs module 
const { readFileSync, writeFileSync} = require('fs'); 

console.log('start');
// read this file sync using utf8 encoding 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second); 

// write to a file,synchronously, if there is no file node will create it, otherwise will overwrite it 
// node will append to the existing text if use flag a 
writeFileSync('./content/result-sync.txt', 
	`Here is the result: ${first}, ${second}`, 
	{flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one');

