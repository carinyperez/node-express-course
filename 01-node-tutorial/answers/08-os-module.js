// node has built in modules, including the os module 
// the os module provides operating system related utility methods and properties
// an operating system is software that supports a computer's basic functions, such as executing applications 

const os = require('os'); 

// info about current user 
const user = os.userInfo(); 
console.log(user);

// method returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
	name: os.type(), 
	release: os.release(), 
	totalMem: os.totalmem(), 
	freeMem: os.freemem()
}

console.log(currentOs);