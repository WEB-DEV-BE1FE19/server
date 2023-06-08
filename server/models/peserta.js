"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcrypt')
const nodemailer = require('../helpers/nodemailer')
module.exports = (sequelize, DataTypes) => {
	class Peserta extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Peserta.belongsToMany(models.Kelas, {through: 'Kelas_Peserta', foreignKey: 'id_peserta'})
			Peserta.belongsToMany(models.Karya, {through: 'Karya_Peserta', foreignKey: 'peserta_id'})
		}
	}
	Peserta.init(
		{
			nama_lengkap: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			asal_sekolah: DataTypes.STRING,
			portofolio: DataTypes.STRING,
		},
    {
      hooks: {
        beforeCreate: async (data, options) => {
          let salt = await bcrypt.genSalt(10)
          let hash = await bcrypt.hash(data.password, salt)
          data.password = hash
        },
        afterCreate: async (data, options) => {
          nodemailer(data.email)
        }
      },
      sequelize: sequelize,
      modelName: "Peserta",
    }
	);
	return Peserta;
};
