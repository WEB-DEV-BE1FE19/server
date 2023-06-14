'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Peserta', 'asal_sekolah');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Peserta', 'asal_sekolah');
  }
};
