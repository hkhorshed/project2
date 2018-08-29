'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectName: DataTypes.STRING,
    team: DataTypes.STRING,
    teamLead: DataTypes.STRING,
    tasks: DataTypes.STRING,
    deadLine: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});


  Project.associate = function(models) {
    Project.belongsToMany(models.User, {
      through: "UserProject"
    });
    Project.belongsToMany(models.Message, {
      through: "MessageProject"
    });
    Project.hasOne(models.Budget, {

    });
  };
  return Project;
};