'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelas.init({
    nama_kelas: DataTypes.STRING,
    kategori_kelas: DataTypes.STRING,
    mentor_kelas: DataTypes.STRING,
    deskripsi_kelas: DataTypes.STRING,
    gambar_kelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};