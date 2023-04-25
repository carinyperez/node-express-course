// controllers contain the implementation code for the endpoints 

const Product = require('../models/product');

// filter functionality on the backend 
const getAllProductsStatic = async function(req, res) {
	const products = await Product.find({}).sort('name').select('name price').limit(10)
	res.status(200).json({products, nbHits: products.length })
	// res.status(200).json({msg: 'static products route'})
}

// querying an api just means filtering out data 
const getAllProducts = async function(req, res) {
	const {featured, company, name, sort, fields, numericFilters} = req.query; 
	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === 'true' ? true : false
	}

	if(company) {
		queryObject.company = company;  
	}

	if (name) {
		queryObject.name = {$regex: name, $options: 'i'}
	}

	if (numericFilters) {
		const operatorMap = {
		  '>': '$gt',
		  '>=': '$gte',
		  '=': '$eq',
		  '<': '$lt',
		  '<=': '$lte',
		};
		const regEx = /\b(<|>|>=|=|<|<=)\b/g;
		let filters = numericFilters.replace(
		  regEx,
		  (match) => `-${operatorMap[match]}-`
		);
		const options = ['price', 'rating'];
		filters = filters.split(',').forEach((item) => {
		  const [field, operator, value] = item.split('-');
		  if (options.includes(field)) {
			queryObject[field] = { [operator]: Number(value) };
		  }
		});
	  }

	let result = Product.find(queryObject);

	if (sort) {
		const sortList = sort.split(',').join('');
		result = result.sort(sortList);
	} else {
		result = result.sort('createAt');
	}
	

	if (fields) {
		const fieldsList = fields.split(',').join('')
		result = result.select(fieldsList)
	}
	const page = Number(req.query.page) || 1;
  	const limit = Number(req.query.limit) || 10;
  	const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

	const products = await result;

	res.status(200).json({products, nbHits: products.length})
	// res.status(200).json({msg: 'products route'})
}


// const createNewProduct = async function(req, res) {
// 	const product = await Product.create(req.body);
// 	res.status(201).json({product});
// }


module.exports = {getAllProductsStatic, getAllProducts};

