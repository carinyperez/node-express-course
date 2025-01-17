const {CustomAPIError} = require('../errors/custom-error');

const errorHandler = function(err, req, res, next) {
	console.log(err);
	// resolving the error, no more middleware 
	if (err instanceof CustomAPIError){ 
		return res.status(err.statusCode).json({msg: err.message})
	}
	return res.status(err.status).json({msg: `Something went wrong, please try again`})
}

module.exports = errorHandler;