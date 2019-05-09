var express = require('express');

var app = new express();

var bodyParser = require('body-parser');

// var dbconfig = require('./configs/dbconfig')

// var test = require('./models/UserModels')


var userControl = require('./controllers/UserController')



app.use(function (req,res,next) {

	// body...
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','content-type')
	next();
	
})

//this will parse jason data in form body that arrives from client browser
app.use(bodyParser.json());



app.post('/v1/users',
	userControl.hashGenerator,
	userControl.registerUser,function(req,res,next){

		res.status(201);
		res.send({"message": "User was registered"});
		// res.status(201);
		// res.send({"sde":"asd"});

	// console.log(req.body)

})

app.use(function(err,req,res,next){

	// console.log(err.status);
	// console.log(err.message);

	res.status(err.status);
	res.send({"message":err.message})
})



app.listen(process.env.PORT);

console.log('server running');