var usermodel = require('../models/UserModels');
var bcrypt = require('bcryptjs');
var saltRound=10;


function hashGenerator(req,res,next){

//this is plaintext password
req.body.password

bcrypt.hash(req.body.password,saltRound)

.then(function(hash){
	console.log(hash);
	req.hashvalue =hash;
	next();

})
.catch(function(err){

})

}


function registerUser(req,res,next){
usermodel.User.create({

	username : req.body.username,
	// password:req.body.password,
	password:req.hashvalue,
	address:req.body.address

})

.then(function(result){
	// console.log(result);

	next();
})
.catch(function(err)
{
	// console.log(err);
	next({"status":500,"message":"DB error"})
	// next('this is error');
})

}

module.exports = {
	registerUser,
	hashGenerator
}