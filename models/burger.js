//burger model
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: {
    	type: DataTypes.STRING,
    	alllowNull: false,
    	validate: {
    		len: [1]
    	}
    }, 
    devoured: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false,
    	defaultValue: false
  	}
  	// timestamps: false
  });
  return Burger;
};