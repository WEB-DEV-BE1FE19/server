'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Peserta', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_email'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Peserta');
  }
};
