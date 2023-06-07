'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Karya', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul_karya: {
        type: Sequelize.STRING
      },
      deskripsi_karya: {
        type: Sequelize.STRING
      },
      gambar_karya: {
        type: Sequelize.STRING
      },
      peserta_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Peserta',
          key: 'id'
        }
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
    await queryInterface.dropTable('Karyas');
  }
};