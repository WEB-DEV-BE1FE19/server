'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Berita.init({
    judul_berita: DataTypes.STRING,
    deskripsi_berita: DataTypes.TEXT,
    gambar_berita: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Berita',
  });
  return Berita;
};