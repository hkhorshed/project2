'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectName: DataTypes.STRING,
    team: DataTypes.STRING,
    teamLead: DataTypes.STRING,
    task: DataTypes.STRING,
    deadLine: DataTypes.DATE,
    endDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  
  
  project.associate = function(models) {
    project.hasMany(models.user);

    // Project.belongsToMany(models.message, {
    //   through: "MessageProject"
    // });
    // Project.hasOne(models.budget, {

    // });
  };
  return project;
};