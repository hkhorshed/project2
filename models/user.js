'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {});
  
  
  user.associate = function(models) {
    user.belongsToMany(models.project)
  };
  return user;
};