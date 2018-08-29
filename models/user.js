'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {});

  
  User.associate = function(models) {
    User.belongsToMany(models.Project , { 
      through:"UserProject"
    })
  };

  return User;
};