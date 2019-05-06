var usermodel = require('../models/UserModels');


function registerUser(){
usermodel.User.create({

	username : 'anu',
	
	address:'jorpati',

})

.then(function(result){
	// console.log(result);
})
.catch(function(err)
{
	console.log(err);
})

//password : 'anu',
}

module.exports = {
	registerUser
}