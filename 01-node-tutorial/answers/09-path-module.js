// node has built in modules, including the path module 
// the path module provides utilities for working with file and directory paths

const path = require('path'); 

// path segment separator 
console.log(path.sep); 

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)

const base = path.basename(filePath); 
console.log(base);

// absolute path to test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
