'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('project',
      'user_id', 
      { type: Sequelize.INTEGER,
        reference: {
          model: 'user',
          key: 'id'
        }
      }
    
    );
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.reomveColumn('project', 'user_id');
    
  }
};
