'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Karya_Peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peserta_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Peserta',
          key: 'id'
        }
      },
      karya_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Karya',
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
    await queryInterface.dropTable('Karya_Peserta');
  }
};