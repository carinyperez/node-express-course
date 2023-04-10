const express = require('express');
const router = express.Router();

const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}  = require('../controllers/people');


// @ route GET /api/people
// @ desc Get people data 
// @ access public
// routes contain the endpoints of the application 
// controllers are the implementation for the routes  
// router.get('/', function (req, res) {
// 	res.status(200).json({ success: true, data: people })
// })
// can also do router.route('/').get(getPeople).post(createPerson)
router.get('', getPeople);

// @ route POST  /api/people
// @ desc Return new person  
// @ access Public 
router.post('/',createPerson);

// @ route POST /api/postman/people
// @ desc Insert person into people array 
// @ access Public 
router.post('/postman', createPersonPostman);


// @ route PUT /api/postman/people 
// @ desc Update person 
// @ access Public 
// query is a filter, id is a path variable
router.put('/:id', updatePerson);

// @ route DELETE /api/people/id
// @ desc Remove person from people array using id 
// @ access Public 
router.delete('/:id', deletePerson);

module.exports = router; 