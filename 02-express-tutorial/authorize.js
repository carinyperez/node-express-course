const authorize = function(req,res, next) {
	// to set user in query /?user=john
	const { user } = req.query;
	if (user === 'john') {
		// this modifies the request object 
		req.user = {name: 'john', id: 3}
		next(); 
	} else {
		res.status(401).send('Unauthorized');
	}
}

module.exports = authorize; 