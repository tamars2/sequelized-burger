var sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
  	timestamps: false
  });
  return burgers;
};

// , {
//     classMethods: {
//       associate: function(models) {
//         burgers.hasOne(models.devourers)
//       }
//     }