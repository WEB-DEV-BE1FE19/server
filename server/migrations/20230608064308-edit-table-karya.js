'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('Karya', 'Karya');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('Karya', 'Karya');
  }
};
