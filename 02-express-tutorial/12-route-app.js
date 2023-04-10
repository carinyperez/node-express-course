const express = require('express'); 

const app = express(); 
const auth = require('./routes/auth');
const people = require('./routes/people');

// middleware to route static assets 
app.use(express.static('./methods-public'));

// middleware to parse data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// middleware for routes 
app.use('/login', auth);
app.use('/api/people', people)

app.listen(5000, function(req, res) {
	console.log('Server listening to port 5000');
})

