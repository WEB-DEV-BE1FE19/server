'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Karya.belongsToMany(models.Peserta, {through: models.Karya_Peserta, foreignKey: 'karya_id'})
    }
  }
  Karya.init({
    judul_karya: DataTypes.STRING,
    deskripsi_karya: DataTypes.TEXT,
    gambar_karya: DataTypes.STRING,
    peserta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Karya',
  });
  return Karya;
};