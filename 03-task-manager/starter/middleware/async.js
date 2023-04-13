// async wrapper is a function that takes a function as an argument
// and returns an async function that takes req, res and next as arguments and returns a promise 

const asyncWrapper = function(fn) {
	return async function(req, res, next) {
		try {
			await fn(req, res, next)
		} catch (error) {
			// built-in error
			// pass the error and resolve it down the line  
			next(error)
		}
	}
}

module.exports = asyncWrapper;

