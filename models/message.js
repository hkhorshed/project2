'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.TEXT
  }, {});
  
  
  message.associate = function(models) {
    message.belongsTo(models.project, { 
      through: "MessageProject"
    }) 
  };
  return message;
};