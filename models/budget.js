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
    // associations can be defined here
  };
  return Budget;
};