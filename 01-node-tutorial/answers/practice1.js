const sentence = require('./practice2');
const os = require('os');
const fs = require('fs');

// asynchronously write data to a file 
fs.writeFile('./content/practice.txt', `My name is ${os.userInfo().username} and ${sentence}`, function(err, result){}); 
