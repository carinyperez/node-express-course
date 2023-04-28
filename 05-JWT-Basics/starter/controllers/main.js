
const jwt = require('jsonwebtoken');
// check username and password, if exist create new jwt 
// send back to frontend
// set up auth so only the request with the jwt can access the dashboard 

const {BadRequestError} = require('../errors');

const login = async function(req, res) {
	const {username, password} = req.body;
	if (!username || !password){
		// 400 http code for bad request 
		// throw new CustomAPIError('Please provide email and password', 400)
		throw new BadRequestError('Please provide email and password');
	}
	const id = new Date().getDate();
	const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
	res.status(200).json({msg: 'user created', token})
}

// middleware can modify request 
const dashboard = async function(req, res) {
	const luckyNumber = Math.floor(Math.random() * 100)

	res.status(200).json({
	msg: `Hello, ${req.users.names}`,
	secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
	})
	
}
  
module.exports = {
	login,
	dashboard,
}