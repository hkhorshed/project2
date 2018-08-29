'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  }, {});
  Channel.associate = function(models) {
    Channel.belongsTo(models.Channel, {
      foreignKey: 'teamId'
    });
  };
  return Channel;
};