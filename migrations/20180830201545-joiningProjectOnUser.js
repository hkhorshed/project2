'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'projects',
        'user_id',
         { 
           type: Sequelize.INTEGER,
           references: {
             model: 'users',
             key: 'id'
           }
          });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'projects',
        'user_id',
        {type: Sequelize.INTEGER}
      )
    
  }
};
