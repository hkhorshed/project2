'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.TEXT
  }, {});
  Message.associate = function(models) {
    User.belongsTo(models.Channel, {
      foreignKey: 'channelId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Message;
};