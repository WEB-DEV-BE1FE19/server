'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_kelas: {
        type: Sequelize.STRING
      },
      kategori_kelas: {
        type: Sequelize.STRING
      },
      mentor_kelas: {
        type: Sequelize.STRING
      },
      deskripsi_kelas: {
        type: Sequelize.STRING
      },
      gambar_kelas: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kelas');
  }
};