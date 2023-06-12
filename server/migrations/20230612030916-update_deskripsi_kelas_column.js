'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Kelas', 'deskripsi_kelas', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Kelas', 'deskripsi_kelas', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  }
};
