const express = require('express');
const router = express.Router();

const {login, dashboard} = require('../controllers/main');
const authMiddleware = require('../middleware/auth')

// @route /login
// @desc Login 
// @access Public
router.post('/login', login)

// @route /dashboard
// @desc Dashboard
// @access Private 
router.get('/dashboard', authMiddleware, dashboard)

module.exports = router; 