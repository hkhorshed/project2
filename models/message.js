'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.TEXT
  }, {});
  Message.belongsTo(models.Project, { 
    through: "MessageProject"
  }) 
  return Message;
};