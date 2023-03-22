// a loop that calls writeFileSync 999 times and appends a new line every time 
const { writeFileSync } = require('fs');

for (let i = 0; i < 1000; i++) {
	writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag : 'a'})
}