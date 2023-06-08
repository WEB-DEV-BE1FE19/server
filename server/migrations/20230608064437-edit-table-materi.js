'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('Materi', 'Materi');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('Materi', 'Materi');
  }
};
