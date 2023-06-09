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
      Kelas.belongsToMany(models.Peserta, {through: models.Kelas_Peserta, foreignKey: 'id_kelas'})
      Kelas.hasMany(models.Materi, {foreignKey: 'kelas_id'})
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