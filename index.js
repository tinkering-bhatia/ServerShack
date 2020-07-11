const express = require('express');
const log = require('morgan');
const app = express();

// enables environment variables
require('dotenv').config();

// logger
app.use(log('dev'));

// CORS handler
app.use((req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', '*');
	res.set('Access-Control-Allow-Methods', '*');
	if(req.method === 'OPTIONS'){
		res.status(200).end();
		return;
	} 
	next();
});

// Setting Content-Type
app.use((req,res,next) => {
	res.set('Content-Type', 'application/json');
	next();
});

// For undefined routes
app.use((req, res, next) => {
	let err = new Error("Undefined route");
	err.status = 404;
	next(err);
});

// For all other errors
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: error.message,
	});
	console.log(error);
});


app.listen(process.env.PORT, () => {
	console.log(`App running on port: ${process.env.PORT}`);
});