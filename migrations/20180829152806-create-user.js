'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          models: 'Project',
          key: 'id'
        },
      },
      // references: {
      //   models: 'Project',
      //   key: 'id'
      // },
      userName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false 
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phoneNum: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};