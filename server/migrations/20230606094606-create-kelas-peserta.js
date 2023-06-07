'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kelas_Peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_peserta: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Peserta',
          key: 'id'
        }
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas',
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
    await queryInterface.dropTable('Kelas_Peserta');
  }
};