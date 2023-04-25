const express = require('express');

const router = express.Router();

const {getAllProducts, getAllProductsStatic, createNewProduct} = require('../controllers/products');

// routes contain the endpoints of the application 
// @route /api/v1/products
// @desc Get all products
// @access Public 
router.get('/', getAllProducts);

// @route /api/v1/products
// @desc Get all products static version
// @access Public 
router.get('/static', getAllProductsStatic);

// @route /api/v1/products
// @desc Create a new product 
// @access Public 
// router.post('/',createNewProduct);

module.exports  = router; 