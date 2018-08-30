'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectName: DataTypes.STRING,
    teamLead: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  project.associate = function(models) {
    project.hasMany(models.user, {
      foreignKey: 'user_id'
    });
  };
  return project;
};