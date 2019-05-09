//sequilize connection part

var Sequelize = require('sequelize');

// Option 1: Passing parameters separately
var sequelize = new Sequelize('softwarica', 'root','anu', {
  host: 'localhost',
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging:false 
});


sequelize.authenticate()
.then(function(){

console.log('db successfully connected');

})

.catch(function(err)
{
	console.log(err);
})


//like throw
module.exports ={
	Sequelize,
	sequelize

}
