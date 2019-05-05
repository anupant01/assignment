var express = require('express');

var app = new express();

var bodyParser = require('body-parser');



app.use(function (req,res,next) {

	// body...
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','content-type')
	next();
	
})

//this will parse jason data in form body that arrives from client browser
app.use(bodyParser.json());



app.post('/v1/users',function(req,res,next){

	console.log(req)


})


//sequilize connection part

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});













app.listen(3001);

console.log('server reunning');