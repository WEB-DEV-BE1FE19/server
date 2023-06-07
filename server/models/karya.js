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
      // define association here
    }
  }
  Karya.init({
    judul_karya: DataTypes.STRING,
    deskripsi_karya: DataTypes.STRING,
    gambar_karya: DataTypes.STRING,
    peserta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Karya',
  });
  return Karya;
};