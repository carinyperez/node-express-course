// HTTP is a protocol for data sent over the web via TCP/IP
// TCP is the protocol for sending data through sockets via packets
// IP is an internet protocol, IP is a number that identifies a computer 

// Client-Server Model of Computing
// client and server communicate via requests and responses 
//  IP: 209.85.128.0					  IP: 74.125.224.72
//    Client(JS)    http request         Server (php, c#, ruby, nodeJS)
// 	 -----------	------------>	       -----------
//		socket: where information flows via tcp protocol 
//					<-------------> 
// 	|Web browser|   <------------	      
// 					http response 

// GET read data
// POST insert data 
// PUT Update data
// DElETE Delete data 

const express = require('express');
const app = express();

let { people } = require('./data');

// static assets
// this is doing the path resolution for us 
app.use(express.static('./methods-public'));

// middleware to parse form data
app.use(express.urlencoded({extended: false}));

app.use(express.json())


// @ route POST /login 
// @ desc  Parse data from login form 
// @ access Public 
app.post('/login', function (req, res) {
	const {name} = req.body; 
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please provide credentials')
})

// @ route GET /api/people
// @ desc Get people data 
// @ access public 
app.get('/api/people', function (req, res) {
	res.status(200).json({ success: true, data: people })
})

// @ route POST  /api/people
// @ desc Return new person  
// @ access Public 
app.post('/api/people', function(req, res) {
	const {name} = req.body; 
	if (!name) {
		return res.status(400).json({success: false, message: 'Please provide name value'})
	}
	// send back data object with person 
	// 201 status code success and created new resource 
	res.status(201).json({success: true, person: name})
})

// @ route POST /api/postman/people
// @ desc Insert person into people array 
// @ access Public 
app.post('/api/postman/people', function(req, res) {
	const {name} = req.body; 
	if (!name) {
		return res.status(400).json({success: false, message: 'Please provide name value'})
	}
	res.status(201).json({success: true, data: [...people, name]})
})

// @ route PUT /api/postman/people 
// @ desc Update person 
// @ access Public 
// query is a filter, id is a path va
app.put('/api/people/:id', function(req, res) {
	const {id} = req.params; 
	const {name} = req.body; 
	// get person by id and update person 
	const person = people.find(function(person) {
		return person.id === Number(id) 
	})
	if (!person) {
		return res.status(404).json({success: false, message: `No person with id ${id}`})
	}
    // this returns a new array with person modified 
	const newPeople = people.map(function(person) {
		if (person.id === Number(id)) {
			person.name = name
		}
		return person 
	})
	res.status(201).json({success: true, data: newPeople})
})

// @ route DELETE /api/people/id
// @ desc Remove person from people array using id 
// @ access Public 
app.delete('/api/people/:id', function(req, res) {
	const {id} = req.params;
	const person = people.find(function(person) {
		return person.id === Number(id)
	})
	if (!person) {
		return res.status(404).json({success: false, message: `Person with id ${id} not found`})
	}

	const newPeople = people.filter(function(person) {
		return person.id !== Number(id)
	})
	res.status(201).json({success: true, data: newPeople})
})

app.listen(5000, function () {
	console.log('Server listening to port 5000');
})

