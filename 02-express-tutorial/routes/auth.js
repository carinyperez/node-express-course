const express = require('express');
const router = express.Router(); 

// @ route POST /login 
// @ desc  Parse data from login form 
// @ access Public 
// we use router instead of app.post('/login') 
router.post('/', function (req, res) {
	const {name} = req.body; 
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please provide credentials')
})

module.exports = router; 