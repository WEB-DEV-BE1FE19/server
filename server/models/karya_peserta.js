'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karya_Peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Karya_Peserta.init({
    peserta_id: DataTypes.INTEGER,
    karya_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Karya_Peserta',
  });
  return Karya_Peserta;
};