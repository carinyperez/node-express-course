const jwt = require('jsonwebtoken');
// const CustomAPIError = require('../middleware/error-handler');
const {UnauthenticatedError} = require('../errors');

const authenticationMiddleware = async function(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer')){
		// 401 is unauthorized 
		// throw new CustomAPIError('No token provided', 401);
		throw new UnauthenticatedError('No token provided')
	}

	const token = authHeader.split(' ')[1];
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// const luckyNumber = Math.floor(Math.random() * 100)
		const {id, username} = decoded; 
		req.user = {id, username}
		// what does next do here, what happens if we omit it ??
		next();
		// res.status(200).json({
		// msg: `Hello, ${decoded.username}`,
		// secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
		// })
	} catch (error) {
		throw new UnauthenticatedError('Not authorized to access this route')
		// throw new CustomAPIError('Not authorized to access this route', 401)
	}
}

module.exports = authenticationMiddleware;