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
	userControl.registerUser,function(req,res,next){

	// console.log(req)


})















app.listen(6000);


console.log('server running');