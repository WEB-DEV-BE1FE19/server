'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Karyas', 'deskripsi_karya', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Karyas', 'deskripsi_karya', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  }
};
