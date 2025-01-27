// routes contain the endpoints for the application 
// controllers contain the implementation code for the endpoints
// models defines data structure and responds to controller requests because controller never interacts with the database 


const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');


// confused about how asyncWrapper works ?? 
// why do we need the asyncWrapper, harder to debug ?? 
const getAllTasks = asyncWrapper(async function (req, res) {
	// try {
	// 	const tasks = await Task.find({});
	// 	res.status(200).json({ tasks})
	// } catch (error) {
	// 	res.status(500).json({ msg: error })
	// }
	// our asyncWrapper handles the error
	const tasks = await Task.find({})
	res.status(200).json({tasks})
})

const createTask = asyncWrapper(async function (req, res) {
	// an instance of a model is a document 
	// creates a document 
	// try {
	// 	const task = await Task.create(req.body)
	// 	res.status(201).json({ task })
	// } catch (error) {
	// 	res.status(500).json({ msg: error })
	// }
	const task = await Task.create(req.body)
	res.status(201).json({ task })

})

const getTask = asyncWrapper(async function (req, res, next) {
	// try {
	// 	const { id } = req.params;
	// 	const task = await Task.findOne({ _id: id })
	// 	if (!task) {
	// 		return res.status(404).json({ msg: `No task with id: ${id}` })
	// 	}
	// 	res.status(200).json({ task })
	// } catch (error) {
	// 	res.status(500).json({ msg: error })
	// }

	const { id } = req.params;
	const task = await Task.findOne({ _id: id })
	if (!task) {
		// const error = new Error('Not found');
		// error.status = 404; 
		// return next(error);
		return next(createCustomError(`No task with id : ${id}`, 404))
		// return res.status(404).json({ msg: `No task with id: ${id}` })
	}
	res.status(200).json({ task })
})

const updateTask = asyncWrapper(async function (req, res) {
	// try {
	// 	const { id } = req.params;
	// 	const data = req.body;
	// 	const task = await Task.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
	// 	if (!task) {
	// 		return res.status(404).json({ msg: `No task found with id ${id}` })
	// 	}
	// 	res.status(200).json({ task })
	// } catch (error) {
	// 	res.status(500).json({ msg: error })
	// }
	const { id } = req.params;
	const data = req.body;
	const task = await Task.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
	if (!task) {
		return next(createCustomError(`No task with id: ${id}`, 404));
		// return res.status(404).json({ msg: `No task found with id ${id}` })
	}
	res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async function (req, res) {
	// try {
	// const { id } = req.params;
	// 	const task = await Task.findOneAndDelete({ _id: id })
	// 	if (!task) {
	// 		return res.status(404).json({ msg: `No task found with id ${id}` })
	// 	}
	// 	res.status(200).json({ task })
	// } catch (error) {
	// 	// custom error 
	// 	res.status(500).json({ msg: error })
	// }
	const { id } = req.params;
	const task = await Task.findOneAndDelete({ _id: id })
	if (!task) {
		return next(createCustomError(`No task with id: ${id}`, 404));
	}
	res.status(200).json({ task })
})

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
