// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

// this is evaluated even though we didn't assign it to a variable 
// importing a modules invokes the code 
require('./07-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);