'use strict';
module.exports = (sequelize, DataTypes) => {
  const budget = sequelize.define('budget', {
    projectName: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    budget: DataTypes.INTEGER,
    expenseLog: DataTypes.STRING
  }, {});
  
  
  budget.associate = function(models) {
    budget.belongsTo(models.project, {
      through: 'ProjectBudget'
    });
  };
  return budget;
};