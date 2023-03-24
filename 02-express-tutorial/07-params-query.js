const express = require('express');

const app = express();
const { products } = require('./data');

app.get('/', function(req, res) {
	res.send('<h1> Home Page </h1> <a href="/api/products"> Products </a>')
})

// @ route GET api/products
// @ desc GET products
// @ access public 
app.get('/api/products', function(req, res) {
	const newProducts = products.map(function(product) {
		const {id, name, image} = product; 
		return {id, name, image}
	})
	res.json(newProducts)
})

// @ route GET api/product/:id
// @ desc GET products by id 
// @ access public 
app.get('/api/products/:id', function(req, res) {
	let id = req.params.id;
	const newProduct = products.find(function(product) {
		if(product.id === Number(id)) {
			return {id, name, image} = product;
		}
	});
	// if no product early return 
	if (!newProduct) {
		return res.status(404).send('Product does not exist');
	}
	return res.json(newProduct); 
})

app.get('/api/products/:productID/reviews/:reviewID', function(req, res) {
	console.log(req.params);
	res.send('hello world');
})

// send info to the server using a url
// /api/v1/query?search=a&limit=2
// return sorted products using query  
app.get('/api/v1/query', (req, res) => {
	// console.log(req.query)
	const { search, limit } = req.query;
	// why do we need to spread operator instead of let sortedProducts = products; 
	let sortedProducts = [...products]
  
	if (search) {
	  console.log({search});
	  sortedProducts = products.filter(function(product) {
		return product.name.startsWith(search);
	  })
	}
	if (limit) {
	   sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
	  // res.status(200).send('no products matched your search');
	  // can only send one response 
	  return res.status(200).json({ success: true, data: [] })
	}
	res.status(200).json(sortedProducts);
  })

app.listen(5000, function(req, res) {
	console.log('Server listening to port 5000');
})
