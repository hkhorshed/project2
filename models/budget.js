'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    projectName: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    budget: DataTypes.INTEGER,
    expenseLog: DataTypes.STRING
  }, {});

  
  Budget.associate = function(models) {
    Budget.belongsTo(models.Project, {
      foreignKey: 'projectNameId'
    })
  };
  return Budget;
};