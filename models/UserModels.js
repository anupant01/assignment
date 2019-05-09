var db = require('../configs/dbconfig')

const User = db.sequelize.define('user', {

  // attributes
  id:{
  	type:db.Sequelize.INTEGER,
  	allowNull:false,
  	autoIncrement:true,
  	primaryKey:true


  },
  username: {
    type: db.Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
 
  address: {
    type: db.Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
},

 {
  // options

  freezeTableName:true,
  tableName:'users_table'

});

User.sync({force:false})


.then(function(result)

{
// console.log(result);

})
.catch(function(err){
	console.log(err)
})


module.exports = {
	User
}


 // password: {
 //    type: db.Sequelize.STRING,
 //    allowNull: false
 //  },