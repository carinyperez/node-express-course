const fs = require('fs').promises; 

async function makeFile() {
	try {
		for (let i = 1; i < 11; i++) {
			// if we don't await we get out of order 
			// await can only be used with promises, doesn't work if we use require('fs')
			// why do we need to use .promises ?? 
			await fs.writeFile('./content/practice2.txt', `This is line ${i}\n`, { flag: 'a' })
		}
	} catch (error) {
		console.log(error)
	}
}

makeFile();