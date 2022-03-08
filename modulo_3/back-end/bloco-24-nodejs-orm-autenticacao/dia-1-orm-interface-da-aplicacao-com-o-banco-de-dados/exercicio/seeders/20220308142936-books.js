'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books',
    [
      {
        title: 'Lord Of The Rings The Hobbit',
        author: 'J.R.R.Tolkien',
        pageQuantity: 347,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {})  
  }
};
