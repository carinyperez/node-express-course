const {people} = require('../data');

// controllers are the implementation code for the routes
const getPeople = function(req, res) {
	res.status(200).json({ success: true, data: people })
}

const createPerson = function(req, res) {
	const {name} = req.body; 
	if (!name) {
		return res.status(400).json({success: false, message: 'Please provide name value'})
	}
	// send back data object with person 
	// 201 status code success and created new resource 
	res.status(201).json({success: true, person: name})
}

const createPersonPostman = function(req, res) {
	const {name} = req.body; 
	if (!name) {
		return res.status(400).json({success: false, message: 'Please provide name value'})
	}
	res.status(201).json({success: true, data: [...people, name]})
}

const updatePerson = function(req, res) {
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
}


const deletePerson = function(req, res) {
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
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson};

