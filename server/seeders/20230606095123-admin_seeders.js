"use strict";
require("dotenv").config();
const { hashing } = require("../helpers/cekUser");
const username = process.env.USERNAME_ADMIN;
const password = process.env.PASSWORD_ADMIN;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Admins",
			[
				{
					nama_admin: "admin01",
					username: username,
					password: await hashing(password),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Admins", null, {});
	},
};
