// routes contain the endpoints for the application 
// controllers contain the implementation code for the endpoints

const Task = require('../models/Task');

const getAllTasks  = function(req, res) {
	res.send('Get all tasks')
}

const createTask = async function(req, res) {
	// an instance of a model is a document 
	// creates a document 
	const task = await Task.create(req.body)
	res.status(201).json({task})
}

const getTask = function(req, res) {
	res.send('Get task by id')
}

const updateTask = function(req, res) {
	res.send('Update task by id ')
}

const deleteTask = function(req, res) {
	res.send('Delete task by id')
}
module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};