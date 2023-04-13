// custom error class 
class CustomAPIError extends Error {
	constructor(message, statusCode){
		// this is inherited from Error class 
		super(message)
		// new property
		this.statusCode = statusCode
	}
}

const createCustomError = function(msg, statusCode) {
	return new CustomAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError};

