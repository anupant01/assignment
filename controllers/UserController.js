var usermodel = require('../models/UserModels');


function registerUser(req,res,next){
usermodel.User.create({

	username : req.body.username,
	password:req.body.password,
	address:req.body.address

})

.then(function(result){
	console.log(result);
})
.catch(function(err)
{
	console.log(err);
})

}

module.exports = {
	registerUser
}