const { Admin, Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const { checkPassword } = require("../helpers/cekUser");

class AdminGetController {
	static async adminLogin(req, res) {
		try {
			const data = req.body;
			const admin = await Admin.findOne({ where: { username: data.username } });
			const checkPw = await checkPassword(data.password, admin.password);
			if (checkPw) {
				res.status(200).send("halo admin");
			} else {
				res.status(401).json({
					message: "unauthorized (kamu bukan admin)",
				});
			}
		} catch (error) {
			res.status(500).json({
				message: "internal server error",
			});
			console.error(error);
		}
	}

	static async peserta(req, res) {
		try {
			const datas = await Peserta.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			const datas = await Kelas.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karyaSiswa(req, res) {
		try {
			const datas = await Karya.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async berita(req, res) {
		try {
			const datas = await Berita.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = AdminGetController;
