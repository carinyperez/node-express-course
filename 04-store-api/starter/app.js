// the idea of this week is that one can search by attributes such as featured, name, price, rating, company 
// the frontend is only responsible for http requests and the backend is doing the heavy-lifting 
require('dotenv').config()
require('express-async-errors')


const express = require('express');
const app = express(); 
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const url = process.env.MONGO_URI; 
const productsRouter = require('./routes/products');

app.get('/', function(req, res){
	res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>')
})

const port = process.env.PORT || 5000; 

const start = async function() {
	try {
		await connectDB(url)
		app.listen(port, console.log(`Listening on port ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start();

// app.use(express.json())

app.use('/api/v1/products', productsRouter);

// middleware 
app.use(notFoundMiddleware);
app.use(errorMiddleware);

