'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas_Peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Kelas_Peserta.init({
    id_peserta: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas_Peserta',
  });
  return Kelas_Peserta;
};